import { hash, compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import uuidv4 from 'uuid/v4'
import validator from 'validator';

import {
  APP_SECRET,
  getUserId,
  updateCommonUserFamily,
  getCommonFamilies,
  getIntersectionFamiles,
  getDifferentFamilies,
  refreshMyFamilyGroups,
  checkExistFatherAndMother,
  getFileName,
  getFileExt,
} from '../services/utils'

import {
  checkUsername,
  checkPassword,
  checkName,
  checkRelationship,
  checkId,
  checkStatus,
  validateBasicInfo,
  checkNum,
  checkCnEnNum,
  checkDate,
  checkCompanyName,
  checkScore
} from '../validate'
import {
  relationshipMap,
  relationIntersectionNew,
  relationshipGenderMap,
  relationshipTOGender,
} from "../services/relationship"
import {
  FAMILY_CHANGED,
  CLASSGROUP_CHANGED,
  WORKGROUP_CHANGED,
  STUDENTS_ADDED,
  COLLEAGUES_ADDED,
  MYOLDCOLLEAGUES_CHANGED,
  WORKS_CHANGED,
  LOCATIONGROUP_CHANGED,
  MESSAGE_ADDED_TOPIC,
  GMESSAGE_ADDED_TOPIC,
} from './Subscription'
import { pubsub } from '../subscriptions';
import { 
  ossClient,
  DateStartTime,
  FEESETTINGTYPES,
 } from '../services/settings'

export const Mutation = {
  signup: async (parent, { username, password, deviceId }, ctx) => {
    // 输入数据验证
    checkUsername(username)
    checkPassword(password)
    if(!validator.isAlphanumeric(deviceId)){
      throw new Error('设备号索取错误')
    }
    //------------------------------------
    const hasuser = await ctx.db.user({ username })
    if (hasuser) {
      throw new Error(`${username}已经被占用`)
    }
    // 检查设备已注册人数
    const diveiceRegisters = ctx.db.registerCounts({
      where: { deviceId }
    })
    if (diveiceRegisters.length >= 3) {
      throw new Error('每台设备限注册三人，已超过最大限制')
    }
    //------------------------------------
    const hashedPassword = await hash(password, 10)
    const uid = uuidv4()
    const token = sign({ userId: uid }, APP_SECRET)
    const user = await ctx.db.createUser({
      username,
      password: hashedPassword,
      uid,
      token,
    })
    // 添加注册信息
    await ctx.db.createRegisterCount({
      addUser: { connect: { id: user.id } },
      deviceId,
    })

    return {
      token,
      user
    }
  },

  login: async (parent, { username, password }, ctx) => {
    // 输入数据验证
    checkUsername(username)
    checkPassword(password)
    //------------------------------------
    const user = await ctx.db.user({ username })
    if (!user) {
      throw new Error(`用户不存在: ${username}`)
    }

    const valid = await compare(password, user.password)
    if (!valid) {
      throw new Error('密码错误')
    }
    // -----------------------------------


    return {
      token: user.token,
      user
    }
  },
  changePassword: async (parent, { currentPassword, newPassword }, ctx) => {
    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    // -----------------------------------------------
    // 输入数据验证
    if (currentPassword && newPassword) {
      checkPassword(currentPassword)
      checkPassword(newPassword)
    }

    const valid = await compare(currentPassword, user.password)
    if (!valid) {
      throw new Error('原始密码错误')
    }
    // --------------------------------------------------------

    const hashedNewPassword = await hash(newPassword, 10)
    const uid = uuidv4()
    const updateUser = await ctx.db.updateUser({
      data: {
        password: hashedNewPassword,
        uid,
        token: sign({ userId: uid }, APP_SECRET)
      },
      where: {
        uid: userId
      }
    })

    return updateUser

  },

  findPassword: async (parent, { forgetterId }, ctx) => {
    // -----------------------------------------------
    // 输入数据验证
    checkId(forgetterId)

    // --------------------------------------------------------
    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    const forgetter = await ctx.db.user({ id: forgetterId })

    if (!forgetter) {
      throw new Error('用户不存在')
    }
    const findPasswords = await ctx.db.findPassWords({
      where: { forgetter: { id: forgetterId } }
    })
    if (findPasswords.length > 0) {
      const remmembers = await ctx.db.findPassWord({ id: findPasswords[0].id }).remmember()
      if (remmembers[0].id === user.id) {
        return findPasswords[0]
      }
      const updateFindPassword = await ctx.db.updateFindPassWord({
        where: { id: findPasswords[0].id },
        data: {
          times: 2,
          forgetter: { connect: { id: forgetterId } },
          remmember: { connect: { id: user.id } }
        }
      })
      const newPassword = '123456abcd'
      const hashedNewPassword = await hash(newPassword, 10)
      const uid = uuidv4()
      await ctx.db.updateUser({
        data: {
          password: hashedNewPassword,
          uid,
          token: sign({ userId: uid }, APP_SECRET)
        },
        where: {
          id: forgetterId
        }
      })

      await ctx.db.deleteFindPassWord({ id: updateFindPassword.id })

      return updateFindPassword
    }

    return ctx.db.createFindPassWord({
      times: 1,
      forgetter: { connect: { id: forgetterId } },
      remmember: { connect: { id: user.id } }
    })

  },

  addBasicInfo: async (parent, { name, gender, birthday, birthplace, residence }, ctx) => {
    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    // -----------------------------------------------
    // 输入数据验证
    validateBasicInfo(name, gender, birthday, birthplace, residence)
    //------------------------------------
    // 检查是或否已经存在location

    let birthLocation
    let residenceLocation

    const homeVillage = await ctx.db.village({ code: birthplace.village })
    const homeStreet = await ctx.db.street({ code: birthplace.street })
    const homeArea = await ctx.db.area({ code: birthplace.area })
    const homeCity = await ctx.db.city({ code: birthplace.city })
    const homeProvince = await ctx.db.province({ code: birthplace.province })

    const residenceVillage = await ctx.db.village({ code: residence.village })
    const residenceStreet = await ctx.db.street({ code: residence.street })
    const residenceArea = await ctx.db.area({ code: residence.area })
    const residenceCity = await ctx.db.city({ code: residence.city })
    const residenceProvince = await ctx.db.province({ code: residence.province })

    const existBirthplaces = await ctx.db.locations({
      where: {
        province: { code: birthplace.province },
        city: { code: birthplace.city },
        area: { code: birthplace.area },
        village: { code: birthplace.village },
        street: { code: birthplace.street },
      }
    })

    if (existBirthplaces.length === 0) {
      birthLocation = await ctx.db.createLocation({
        name: homeProvince.name + homeCity.name + homeArea.name + homeStreet.name + homeVillage.name,
        province: { connect: { code: birthplace.province } },
        city: { connect: { code: birthplace.city } },
        area: { connect: { code: birthplace.area } },
        street: { connect: { code: birthplace.street } },
        village: { connect: { code: birthplace.village } },
      })
    } else {
      birthLocation = existBirthplaces[0]
    }
    const existResidences = await ctx.db.locations({
      where: {
        province: { code: residence.province },
        city: { code: residence.city },
        area: { code: residence.area },
        village: { code: residence.village },
        street: { code: residence.street },
      }
    })
    if (existResidences.length === 0) {
      residenceLocation = await ctx.db.createLocation({
        name: residenceProvince.name + residenceCity.name + residenceArea.name + residenceStreet.name + residenceVillage.name,
        province: { connect: { code: residence.province } },
        city: { connect: { code: residence.city } },
        area: { connect: { code: residence.area } },
        street: { connect: { code: residence.street } },
        village: { connect: { code: residence.village } },
      })
    } else {
      residenceLocation = existResidences[0]
    }
    // -----------------------------------------------
    const updateUser = ctx.db.updateUser({
      where: { uid: userId },
      data: {
        name,
        gender,
        birthdaycalendar: birthday.calendar,
        birthday: birthday.date,
        birthplace: { connect: { id: birthLocation.id } },
        residence: { connect: { id: residenceLocation.id } },
      }
    })
    // 添加location group
    const villageGroupTypes = { 'HomeVillage': homeVillage, 'ResidenceVillage': residenceVillage }
    // 添加village组
    for (const type of Object.keys(villageGroupTypes)) {
      // 检查老家组是否存在
      const villageLocationGroups = await ctx.db.locationGroups({
        where: { code: villageGroupTypes[type].code }
      })
      // 检查用户是否已经有老家组
      const userInVillageGroups = await ctx.db.user({ id: user.id }).locationGroups({
        where: { kind: type }
      })

      // 如果没有老家组
      if (villageLocationGroups.length === 0) {
        await ctx.db.createLocationGroup({
          kind: type,
          code: villageGroupTypes[type].code,
          name: villageGroupTypes[type].name,
          users: { connect: { uid: userId } }
        })
        pubsub.publish(LOCATIONGROUP_CHANGED, {
          [LOCATIONGROUP_CHANGED]: {
            "toId": user.id,
            "type": "refech"
          }
        })
        // 如果用户有老家组
        if (userInVillageGroups.length > 0) {
          // 从原来的组中删除User
          const oldGroup = await ctx.db.updateLocationGroup({
            where: { id: userInVillageGroups[0].id },
            data: { users: { disconnect: { uid: userId } } }
          })
          const oldGroupUsers = await ctx.db.locationGroup({ id: oldGroup.id }).users()
          for (const oldGroupUser of oldGroupUsers) {
            pubsub.publish(LOCATIONGROUP_CHANGED, {
              [LOCATIONGROUP_CHANGED]: {
                "toId": oldGroupUser.id,
                "groupId": oldGroup.id,
                'userid': user.id,
                'type': "userRemoved"
              }
            })
          }
        }
      } else {
        const a = 1
        if (userInVillageGroups.length > 0) {
          if (userInVillageGroups[0].id !== villageLocationGroups[0].id) {
            // 从原来的组中删除User
            const oldGroup = await ctx.db.updateLocationGroup({
              where: { id: userInVillageGroups[0].id },
              data: { users: { disconnect: { uid: userId } } }
            })
            const oldGroupUsers = await ctx.db.locationGroup({ id: oldGroup.id }).users()
            for (const oldGroupUser of oldGroupUsers) {
              pubsub.publish(LOCATIONGROUP_CHANGED, {
                [LOCATIONGROUP_CHANGED]: {
                  "toId": oldGroupUser.id,
                  "groupId": oldGroup.id,
                  'userid': user.id,
                  'type': "userRemoved"
                }
              })
            }
            // 将User添加到现在的组中
            const newGroup = await ctx.db.updateLocationGroup({
              where: { id: villageLocationGroups[0].id },
              data: { users: { connect: { uid: userId } } }
            })
            const newGroupUsers = await ctx.db.locationGroup({ id: newGroup.id }).users()
            for (const newGroupUser of newGroupUsers) {
              if (newGroupUser.id !== user.id) {
                pubsub.publish(LOCATIONGROUP_CHANGED, {
                  [LOCATIONGROUP_CHANGED]: {
                    "toId": newGroupUser.id,
                    "groupId": newGroup.id,
                    "userid": user.id,
                    "username": user.name,
                    "userAvatar": user.avatar,
                    'type': 'userAdded'
                  }
                })
              }
            }
            pubsub.publish(LOCATIONGROUP_CHANGED, {
              [LOCATIONGROUP_CHANGED]: {
                "toId": user.id,
                "type": "refech"
              }
            })
          }
        } else {
          // 将用户添加到现在的组中
          const newGroup = await ctx.db.updateLocationGroup({
            where: { id: villageLocationGroups[0].id },
            data: { users: { connect: { uid: userId } } }
          })
          const newGroupUsers = await ctx.db.locationGroup({ id: newGroup.id }).users()
          for (const newGroupUser of newGroupUsers) {
            if (newGroupUser.id !== user.id) {
              pubsub.publish(LOCATIONGROUP_CHANGED, {
                [LOCATIONGROUP_CHANGED]: {
                  "toId": newGroupUser.id,
                  "groupId": newGroup.id,
                  "userid": user.id,
                  "username": user.name,
                  "userAvatar": user.avatar,
                  'type': 'userAdded'
                }
              })
            }
          }
          pubsub.publish(LOCATIONGROUP_CHANGED, {
            [LOCATIONGROUP_CHANGED]: {
              "toId": user.id,
              "type": "refech"
            }
          })
        }
      }



    }

    // 添加老乡组
    const hometownGroupTypes = {
      "VillageInResidenceVillage": [homeVillage, residenceVillage],
      "StreetInResidenceVillage": [homeStreet, residenceVillage],
      "AreaInResidenceVillage": [homeArea, residenceVillage],
      "CityInResidenceVillage": [homeCity, residenceVillage],
      "ProvinceInResidenceVillage": [homeProvince, residenceVillage],
      "VillageInResidenceStreet": [homeVillage, residenceStreet],
      "StreetInResidenceStreet": [homeStreet, residenceStreet],
      "AreaInResidenceStreet": [homeArea, residenceStreet],
      "CityInResidenceStreet": [homeCity, residenceStreet],
      "ProvinceInResidenceStreet": [homeProvince, residenceStreet],
      "VillageInResidenceArea": [homeVillage, residenceArea],
      "StreetInResidenceArea": [homeStreet, residenceArea],
      "AreaInResidenceArea": [homeArea, residenceArea],
      "CityInResidenceArea": [homeCity, residenceArea],
      "ProvinceInResidenceArea": [homeProvince, residenceArea],
      "VillageInResidenceCity": [homeVillage, residenceCity],
      "StreetInResidenceCity": [homeStreet, residenceCity],
      "AreaInResidenceCity": [homeArea, residenceCity],
      "CityInResidenceCity": [homeCity, residenceCity],
      "ProvinceInResidenceCity": [homeProvince, residenceCity],
    }

    if (homeProvince.id !== residenceProvince.id) {
      // 对于跨省人的增加老乡组
      for (const type of Object.keys(hometownGroupTypes)) {
        // 检查组是否存在
        const hometownLocationGroups = await ctx.db.locationGroups({
          where: { code: `${hometownGroupTypes[type][0].code}in${hometownGroupTypes[type][1].code}` }
        })
        // 检查用户是否已经有组
        const userInHometownGroups = await ctx.db.user({ id: user.id }).locationGroups({
          where: { kind: type }
        })

        if (hometownLocationGroups.length === 0) {
          await ctx.db.createLocationGroup({
            kind: type,
            code: `${hometownGroupTypes[type][0].code}in${hometownGroupTypes[type][1].code}`,
            name: `${hometownGroupTypes[type][0].name}人在${hometownGroupTypes[type][1].name}`,
            users: { connect: { uid: userId } }
          })
          pubsub.publish(LOCATIONGROUP_CHANGED, {
            [LOCATIONGROUP_CHANGED]: {
              "toId": user.id,
              "type": "refech"
            }
          })
          // 如果用户有老家组
          if (userInHometownGroups.length > 0) {
            // 从原来的组中删除User
            const oldGroup = await ctx.db.updateLocationGroup({
              where: { id: userInHometownGroups[0].id },
              data: { users: { disconnect: { uid: userId } } }
            })
            const oldGroupUsers = await ctx.db.locationGroup({ id: oldGroup.id }).users()
            for (const oldGroupUser of oldGroupUsers) {
              pubsub.publish(LOCATIONGROUP_CHANGED, {
                [LOCATIONGROUP_CHANGED]: {
                  "toId": oldGroupUser.id,
                  "groupId": oldGroup.id,
                  'userid': user.id,
                  'type': "userRemoved"
                }
              })
            }
          }
        } else {
          const b = 1
          if (userInHometownGroups.length > 0) {
            if (userInHometownGroups[0].id !== hometownLocationGroups[0].id) {
              // 从原来的组中删除User
              const oldGroup = await ctx.db.updateLocationGroup({
                where: { id: userInHometownGroups[0].id },
                data: { users: { disconnect: { uid: userId } } }
              })
              const oldGroupUsers = await ctx.db.locationGroup({ id: oldGroup.id }).users()
              for (const oldGroupUser of oldGroupUsers) {
                pubsub.publish(LOCATIONGROUP_CHANGED, {
                  [LOCATIONGROUP_CHANGED]: {
                    "toId": oldGroupUser.id,
                    "groupId": oldGroup.id,
                    'userid': user.id,
                    'type': "userRemoved"
                  }
                })
              }
              // 将User添加到现在的组中
              const newGroup = await ctx.db.updateLocationGroup({
                where: { id: hometownLocationGroups[0].id },
                data: { users: { connect: { uid: userId } } }
              })
              const newGroupUsers = await ctx.db.locationGroup({ id: newGroup.id }).users()
              for (const newGroupUser of newGroupUsers) {
                if (newGroupUser.id !== user.id) {
                  pubsub.publish(LOCATIONGROUP_CHANGED, {
                    [LOCATIONGROUP_CHANGED]: {
                      "toId": newGroupUser.id,
                      "groupId": newGroup.id,
                      "userid": user.id,
                      "username": user.name,
                      "userAvatar": user.avatar,
                      'type': 'userAdded'
                    }
                  })
                }
              }

              pubsub.publish(LOCATIONGROUP_CHANGED, {
                [LOCATIONGROUP_CHANGED]: {
                  "toId": user.id,
                  "type": "refech"
                }
              })
            }
          } else {
            // 将用户添加到现在的组中
            const newGroup = await ctx.db.updateLocationGroup({
              where: { id: hometownLocationGroups[0].id },
              data: { users: { connect: { uid: userId } } }
            })
            const newGroupUsers = await ctx.db.locationGroup({ id: newGroup.id }).users()
            for (const newGroupUser of newGroupUsers) {
              if (newGroupUser.id !== user.id) {
                pubsub.publish(LOCATIONGROUP_CHANGED, {
                  [LOCATIONGROUP_CHANGED]: {
                    "toId": newGroupUser.id,
                    "groupId": newGroup.id,
                    "userid": user.id,
                    "username": user.name,
                    "userAvatar": user.avatar,
                    'type': 'userAdded'
                  }
                })
              }
            }
            pubsub.publish(LOCATIONGROUP_CHANGED, {
              [LOCATIONGROUP_CHANGED]: {
                "toId": user.id,
                "type": "refech"
              }
            })
          }
        }
      }
    }

    return updateUser
  },


  createFamily: async (parent, { name, relationship, spouseId }, ctx) => {
    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    // -----------------------------------------------
    // 输入数据验证
    checkName(name)
    checkRelationship(relationship)
    if(spouseId){
      checkId(spouseId)
    }
    
    // -----------------------------------------------
    // 创建家人
    let family
    if (spouseId) {
      checkId(spouseId)
      family = await ctx.db.createFamily({
        relationship,
        status: '0',
        from: { connect: { uid: userId } },
        to: { create: { name } },
        spouse: { connect: { id: spouseId } }
      })
    } else {
      family = await ctx.db.createFamily({
        relationship,
        status: '0',
        from: { connect: { uid: userId } },
        to: { create: { name } },
      })
    }
 
    return family
  },

  updateFamily: async (parent, { id, name, relationship, spouseId, status = "0" }, ctx) => {
    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const ctxUser = await ctx.db.user({ uid: userId })
    if (!ctxUser) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.family({ id }).from()
    if (user.uid !== userId) {
      throw new Error("无法更新不属于自己的家人")
    }
    // -----------------------------------------------
    // 输入数据验证
    checkId(id)
    checkName(name)
    checkRelationship(relationship)
    checkStatus(status)
    if(spouseId){
      checkId(spouseId)
    }
    
    // -----------------------------------------------
    let updateFamily
    if (spouseId) {
      checkId(spouseId)
      updateFamily = await ctx.db.updateFamily({
        where: { id },
        data: {
          to: { update: { name } },
          spouse: { connect: { id: spouseId } },
          relationship,
          status
        },
      })
    } else {
      updateFamily = await ctx.db.updateFamily({
        where: { id },
        data: {
          to: { update: { name } },
          relationship,
          status
        },
      })
    }
    const hasFatherAndMother = await checkExistFatherAndMother(user.id, ctx)
    if (hasFatherAndMother) {
      await refreshMyFamilyGroups(parent, {}, ctx)
    }
    return updateFamily
  },

  deleteFamily: async (parent, { familyId, toId }, ctx) => {
    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.family({ id: familyId }).from()
    if (user.uid !== userId) {
      throw new Error("无法删除不属于自己的家人")
    }
    // -----------------------------------------------
    // 输入数据验证
    checkId(familyId)
    checkId(toId)
    // -----------------------------------------------

    const deleteFamily = await ctx.db.deleteFamily({ id: familyId })
    const personUser = await ctx.db.person({ id: toId }).user()
    const personFamilies = await ctx.db.person({ id: toId }).families()
    if (!personUser && personFamilies.length === 0) {
      await ctx.db.deletePerson({ id: toId })
    }
    const hasFatherAndMother = await checkExistFatherAndMother(user.id, ctx)
    if (hasFatherAndMother) {
      await refreshMyFamilyGroups(parent, {}, ctx)
    }
    return deleteFamily
  },

  connectFamily: async (parent, { relativeId, familyId, name, relationship }, ctx) => {
    // relativeId:亲属的user id
    // familyId:自己建立亲属的id
    // name:亲属的姓名
    // relationship:和亲属的关系

    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }

    const user = await ctx.db.family({ id: familyId }).from()
    if (user.uid !== userId) {
      throw new Error("无法连接不属于自己的家人")
    }
    // -----------------------------------------------
    // 输入数据验证
    checkId(relativeId)
    checkId(familyId)
    checkName(name)
    checkRelationship(relationship)
    // -----------------------------------------------
    // 亲人
    const relative = await ctx.db.user({ id: relativeId })
    if (relative.name !== name) {
      throw new Error("对方姓名与你拟添加的家庭成员姓名不一致")
    }
    // 亲人的家庭成员列表，仅包含尚未连接的列表
    const families = await ctx.db.families({
      where: {
        AND: [
          { from: { id: relativeId } },
          { status: "0" },
          { relationship_in: relationshipMap[relationship] }
        ]
      }
    })
    // 检查拟建立关系的亲人家庭成员中是否添加了与user相同的名字和对应的关系。
    if (families.length === 0) {
      throw new Error("对方家庭成员中未找到你的名字")
    }
    let personId
    let relativeFamilyId
    for (const family of families) {
      // 获取亲人家庭成员的个人信息
      const persons = await ctx.db.persons({ where: { families_some: { id: family.id } } })
      for (const person of persons) {
        if (person.name === user.name && relationshipMap[relationship].indexOf(family.relationship) > -1) {
          personId = person.id
          relativeFamilyId = family.id
        }
      }
    }

    if (!personId || !relativeFamilyId) {
      throw new Error("对方家庭成员中未包含你的名字或关系不正确")
    }
    // 检查person中是否已经存在User
    const persons1 = await ctx.db.persons({ where: { user: { uid: userId } } })
    // 0:连接，1:等待验证 2:确认 3:已连接
    // 更新亲人连接状态为“确认”,更新to中的user
    if (persons1.length === 0) {
      await ctx.db
        .updateFamily({
          data: {
            status: "2",
            to: {
              update: {
                user: {
                  connect: {
                    uid: userId
                  }
                }
              }
            }
          },
          where: {
            id: relativeFamilyId
          }
        })
    } else {
      await ctx.db
        .updateFamily({
          data: {
            status: "2",
            to: {
              connect: {
                id: persons1[0].id
              }
            }
          },
          where: {
            id: relativeFamilyId
          }
        })
    }
    // 此处发送向relative发送订阅
    pubsub.publish(FAMILY_CHANGED, { [FAMILY_CHANGED]: { "text": relativeId } })
    // 更新自己的家庭成员状态为“等待确认”,更新to中的user
    // 检查person中是否已经存在relative
    const persons2 = await ctx.db.persons({ where: { user: { id: relativeId } } })
    let updateFamily
    if (persons2.length === 0) {
      updateFamily = await ctx.db
        .updateFamily({
          data: {
            status: "1",
            to: {
              update: {
                user: {
                  connect: {
                    id: relativeId
                  }
                }
              }
            }
          },
          where: {
            id: familyId
          }
        })
    } else {
      updateFamily = await ctx.db
        .updateFamily({
          data: {
            status: "1",
            to: {
              connect: {
                id: persons2[0].id
              }
            }
          },
          where: {
            id: familyId
          }
        })
    }
    return updateFamily
  },

  confirmFamily: async (parent, { familyId }, ctx) => {
    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.family({ id: familyId }).from()
    if (user.uid !== userId) {
      throw new Error("无法确认不属于自己的家人")
    }
    // -----------------------------------------------
    // 输入数据验证
    checkId(familyId)
    // -----------------------------------------------

    // 更新user family status
    const myUpdateFamily = await ctx.db.updateFamily({
      where: { id: familyId },
      data: { status: "3" }
    })


    // 获取relative famliy
    // 获取relative
    const relative = await ctx.db.family(
      { id: familyId },
    ).to().user()
    // 获取relative Family
    const relativeFamily = await ctx.db.user({ id: relative.id }).families({ where: { to: { user: { uid: userId } } } })
    // 更新relative family  status
    await ctx.db.updateFamily({
      where: { id: relativeFamily[0].id },
      data: { status: "3" }
    })
    pubsub.publish(FAMILY_CHANGED, { [FAMILY_CHANGED]: { "text": relative.id } })
    // 删除多余的person 见deletePersons
    // 没有必要每个删除，可以定时的删除所有family为[],并且user 为null的person.

    // 合并相同的亲人
    // 将共同的亲人分为三部分，一部分是me和relative都有的commonuser,第二部分是me有relative没有的，第三部分是relative有me没有的。
    // 我的家庭成员==》我的共同家庭成员==》使用我的共同家庭成员同步relative的family，同时更新共同家庭成员family
    // rel的家庭成员==》rel的共同家庭成员==》使用rel的共同家庭成员同步我的family，同时更新共同家庭成员family

    const myRelationship = myUpdateFamily.relationship
    const relativeRelationship = relativeFamily[0].relationship
    const isHusbandOrWife = ~["husband", "wife"].indexOf(myRelationship)
    const myFamilies = await ctx.db.user({ uid: userId }).families()
    const relativeFamilies = await ctx.db.user({ id: relative.id }).families()
    // 获取共同的亲人
    const myCommonFamilies = await getCommonFamilies(relativeRelationship, myFamilies, myUpdateFamily.id, ctx)
    const relativeCommonFamilies = await getCommonFamilies(myRelationship, relativeFamilies, relativeFamily[0].id, ctx)
    // 获取共同家庭成员的交集
    const { myIntersectionFamilies, relativeIntersectionFamilies } = await getIntersectionFamiles(myCommonFamilies, relativeCommonFamilies, ctx)
    // 获取me共同成员的差集
    const myDifferentFamilies = getDifferentFamilies(myCommonFamilies, myIntersectionFamilies)
    // 获取relative共同成员的差集
    const relativeDifferentFamilies = getDifferentFamilies(relativeCommonFamilies, relativeIntersectionFamilies)
    // 第一部分：遍历共同的家庭成员交集，用status大的一方更新小的一方。
    for (const myCommonFamily of myIntersectionFamilies) {
      const myCommonFamilyTo = await ctx.db.family({ id: myCommonFamily.id }).to()
      const relativeToCommonUserFamily = await ctx.db.user({ id: relative.id }).families(
        { where: { to: { name: myCommonFamilyTo.name } } }
      )
      const relativeToCommonUserFamilyTo = await ctx.db.family({ id: relativeToCommonUserFamily[0].id }).to()
      // 如果已经同步了，就不要在同步了
      if (myCommonFamilyTo.id !== relativeToCommonUserFamilyTo.id ||
        myCommonFamily.status !== relativeToCommonUserFamily[0].status
      ) {
        if (myCommonFamily.status >= relativeToCommonUserFamily[0].status) {
          // 如果我的家庭成员status大于relative的status,则更新relative的family
          // 更新relative的family
          await ctx.db.updateFamily({
            where: { id: relativeToCommonUserFamily[0].id },
            data: {
              status: myCommonFamily.status,
              to: { connect: { id: myCommonFamilyTo.id } }
            }
          })
          if (myCommonFamily.status > "0") {
            // 如果等于0,则还没有共同的user,无需更新,如果大于0，则要更新CommonUser
            await updateCommonUserFamily(user, myRelationship, myCommonFamily, relative, relativeRelationship, ctx)
          }
          // 向relative推送familyChanged
          pubsub.publish(FAMILY_CHANGED, { [FAMILY_CHANGED]: { "text": relative.id } })
        }
        else {
          // 如果relative的status大于我的家庭成员的status，则更新我的family
          // 更新我的family
          await ctx.db.updateFamily({
            where: { id: myCommonFamily.id },
            data: {
              status: relativeToCommonUserFamily[0].status,
              to: { connect: { id: relativeToCommonUserFamilyTo.id } }
            }
          })

          if (relativeToCommonUserFamily[0].status > 0) {
            // 如果等于0,则还没有共同的user,无需更新,如果大于0，则要更新CommonUser
            await updateCommonUserFamily(relative, relativeRelationship, relativeToCommonUserFamily[0], user, myRelationship, ctx)
          }
          // 像我推送“familyChanged"
          pubsub.publish(FAMILY_CHANGED, { [FAMILY_CHANGED]: { "text": user.id } })
        }
      }
    }

    // 第二部分：遍历relative共同成员差集
    for (const relativeCommonFamily of relativeDifferentFamilies) {
      const relativeCommonFamilyTo = await ctx.db.family({ id: relativeCommonFamily.id }).to()

      const meRelationship = (relationshipGenderMap[relationshipTOGender[relativeCommonFamily.relationship]]
      [relationIntersectionNew[relationshipGenderMap[relative.gender][relativeCommonFamily.relationship]][relativeFamily[0].relationship]]
      )
      // 如果是自己的话，不要增加
      if (relativeCommonFamilyTo.name !== user.name) {
        if (isHusbandOrWife) {
          await ctx.db.createFamily({
            from: { connect: { id: user.id } },
            status: relativeCommonFamily.status,
            to: { connect: { id: relativeCommonFamilyTo.id } },
            spouse: { connect: { id: myUpdateFamily.id } },
            relationship: meRelationship
          })
        } else {
          const mySpouse = await ctx.db.family({ id: myUpdateFamily.id }).spouse()
          await ctx.db.createFamily({
            from: { connect: { id: user.id } },
            status: relativeCommonFamily.status,
            to: { connect: { id: relativeCommonFamilyTo.id } },
            spouse: mySpouse ? { connect: { id: mySpouse.id } } : null,
            relationship: meRelationship
          })
        }
      }
      if (relativeCommonFamily.status > "0") {
        // 如果等于0,则还没有共同的user,无需更新,如果大于0，则要更新CommonUser
        await updateCommonUserFamily(relative, relativeRelationship, relativeCommonFamily, user, myRelationship, ctx)
      }
      pubsub.publish(FAMILY_CHANGED, { [FAMILY_CHANGED]: { "text": user.id } })
    }

    // 第三部分：遍历me共同成员的差集
    for (const myCommonFamily of myDifferentFamilies) {
      const myCommonFamilyTo = await ctx.db.family({ id: myCommonFamily.id }).to()
      let relRelationship = (relationshipGenderMap[relationshipTOGender[myCommonFamily.relationship]]
      [relationIntersectionNew[relationshipGenderMap[user.gender][myCommonFamily.relationship]][myUpdateFamily.relationship]
      ])
      const myCommonFamilyToUser = await ctx.db.family({ id: myCommonFamily.id }).to().user()
      if (myCommonFamilyToUser) {
        if (relRelationship === "sister") {
          if (Date.parse(myCommonFamilyToUser.birthday) > Date.parse(relative.birthday)) {
            relRelationship = "youngsister"
          } else {
            relRelationship = "oldsister"
          }
        } else if (relRelationship === "brother") {
          if (Date.parse(myCommonFamilyToUser.birthday) > Date.parse(relative.birthday)) {
            relRelationship = "youngbrother"
          } else {
            relRelationship = "oldbrother"
          }
        }
      }

      // 如果是自己的话，不要增加
      if (myCommonFamilyTo.name !== relative.name) {
        // 如果relative和me是夫妻的话，则spouse直接为relativeFamily。
        if (isHusbandOrWife) {
          await ctx.db.createFamily({
            from: { connect: { id: relative.id } },
            status: myCommonFamily.status,
            to: { connect: { id: myCommonFamilyTo.id } },
            spouse: { connect: { id: relativeFamily[0].id } },
            relationship: relRelationship
          })
        } else {
          // 如果relative和me是不是夫妻的话，则spouse为relativeFamily的spouse,因为剩下的肯定是子女或兄弟姐妹关系，
          // 兄弟姐妹的话spouse为null,子女的话spouse也是对应的spouse。
          const relativeSpouse = await ctx.db.family({ id: relativeFamily[0].id }).spouse()
          await ctx.db.createFamily({
            from: { connect: { id: relative.id } },
            status: myCommonFamily.status,
            to: { connect: { id: myCommonFamilyTo.id } },
            spouse: relativeSpouse ? { connect: { id: relativeSpouse.id } } : null,
            relationship: relRelationship
          })
        }
      }
      if (myCommonFamily.status > "0") {
        // 如果等于0,则还没有共同的user,无需更新,如果大于0，则要更新CommonUser
        await updateCommonUserFamily(user, myRelationship, myCommonFamily, relative, relativeRelationship, ctx)
      }
      // 向relative推送familychanged
      pubsub.publish(FAMILY_CHANGED, { [FAMILY_CHANGED]: { "text": relative.id } })
    }
    const hasFatherAndMother = await checkExistFatherAndMother(user.id, ctx)
    if (hasFatherAndMother) {
      await refreshMyFamilyGroups(parent, {}, ctx)
    }
    return myUpdateFamily
  },

  addLocation: async (parent, { location, locationName }, ctx) => {
    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    // -----------------------------------------------
    // 输入数据验证
    checkCnEnNum(locationName)

    // -----------------------------------------------
    // 获取要输入的数据。 
    // 获取学校地址
    let place
    place = await ctx.db.location({ name: locationName })
    if (!place) {
      if (location.village !== "") {
        place = await ctx.db.createLocation({
          name: locationName,
          province: { connect: { code: location.province } },
          city: { connect: { code: location.city } },
          area: { connect: { code: location.area } },
          street: { connect: { code: location.street } },
          village: { connect: { code: location.village } },
        })
      } else if (location.street !== "") {
        place = await ctx.db.createLocation({
          name: locationName,
          province: { connect: { code: location.province } },
          city: { connect: { code: location.city } },
          area: { connect: { code: location.area } },
          street: { connect: { code: location.street } },
        })
      } else if (location.area !== "") {
        place = await ctx.db.createLocation({
          name: locationName,
          province: { connect: { code: location.province } },
          city: { connect: { code: location.city } },
          area: { connect: { code: location.area } },
        })
      } else if (location.city !== "") {
        place = await ctx.db.createLocation({
          name: locationName,
          province: { connect: { code: location.province } },
          city: { connect: { code: location.city } },
        })
      } else if (location.province !== "") {
        place = await ctx.db.createLocation({
          name: locationName,
          province: { connect: { code: location.province } },
        })
      } else {
        place = await ctx.db.createLocation({
          name: locationName,
        })
      }
    }

    return place
  },

  addSchool: async (parent, { name, kind, locationName }, ctx) => {
    // 输入数据校验
    // -----------------------------------------------
    checkCnEnNum(name)
    if(!validator.isAlpha(kind)){
      throw new Error('学校种类输入错误')
    }
    checkCnEnNum(locationName)

    // -----------------------------------------------
    const schools = await ctx.db.schools(
      {
        where: {
          AND: [
            { name },
            { kind },
            { location: { name: locationName } }
          ]
        }
      }
    )

    if (schools.length === 0) {
      return ctx.db.createSchool({
        name,
        kind,
        location: { connect: { name: locationName } }
      })
    }

    throw new Error('学校已存在')

  },

  addStudy: async (parent, { year, schoolId, grade, className, majorId = "" }, ctx) => {
    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    // -----------------------------------------------
    // 输入数据验证
    checkNum(year)
    checkId(schoolId)
    checkNum(grade)
    checkCnEnNum(className)
    if (majorId !== "") {
      checkId(majorId)
    }
    // -----------------------------------------------
    // 获取要输入的数据。 
    // 获取学校地址
    const startTime = `${year}-9-1`
    let schoolEdus
    let newSchoolEdu
    if (majorId === "") {
      schoolEdus = await ctx.db.schoolEdus({
        where: {
          AND: [
            { startTime },
            { grade },
            { className },
            { school: { id: schoolId } },
          ]
        }
      })

      if (schoolEdus.length === 0) {
        newSchoolEdu = await ctx.db.createSchoolEdu({
          startTime,
          grade,
          className,
          school: { connect: { id: schoolId } },
          students: { connect: { uid: userId } }
        })

      } else {
        newSchoolEdu = await ctx.db.updateSchoolEdu(
          {
            where: { id: schoolEdus[0].id },
            data: { students: { connect: { uid: userId } } }
          }
        )
      }
    } else {
      schoolEdus = await ctx.db.schoolEdus({
        where: {
          AND: [
            { startTime },
            { grade },
            { className },
            { school: { id: schoolId } },
            { major: { id: majorId } }
          ]
        }
      })

      if (schoolEdus.length === 0) {
        newSchoolEdu = await ctx.db.createSchoolEdu({
          startTime,
          grade,
          className,
          school: { connect: { id: schoolId } },
          major: { connect: { id: majorId } },
          students: { connect: { uid: userId } }
        })
      } else {
        newSchoolEdu = await ctx.db.updateSchoolEdu(
          {
            where: { id: schoolEdus[0].id },
            data: { students: { connect: { uid: userId } } }
          }
        )
      }
    }
    // 向所有同学推送
    const students = await ctx.db.schoolEdu({ id: newSchoolEdu.id }).students()
    for (const student of students) {
      pubsub.publish(STUDENTS_ADDED, { [STUDENTS_ADDED]: { "text": student.id } })
    }
    return newSchoolEdu
  },

  addOrUpdateWork: async (parent, { companyName, startTime, endTime, department, stationId, updateId }, ctx) => {
    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    // -----------------------------------------------
    // 输入数据验证
    checkDate(startTime)
    checkDate(endTime)
    checkCompanyName(companyName)
    checkName(department)
    checkId(stationId)
    if(updateId){
      checkId(updateId)
    }
    // -----------------------------------------------
    const companies = await ctx.db.companies({ where: { name: companyName } })
    let companyId
    let createdWork

    // 如果要是更新的话
    if (updateId) {
      const work = await ctx.db.work({ id: updateId })
      if (work) {
        const worker = await ctx.db.work({ id: updateId }).worker()
        if (worker.id !== user.id) {
          throw new Error('你没有权利修改')
        }
        if (companies.length === 0) {
          throw new Error('无法修改公司名称')
        }
        const updateWork = await ctx.db.updateWork({
          where: { id: updateId },
          data: {
            startTime,
            endTime,
            department,
            post: { connect: { id: stationId } },
          }
        })
        // 如果同事离职了，更新同事，更新组，则从workGroup中删除该成员，同时在oldColleagues中增加成员。
        // 从组中将成员状态为1的成员复制到oldColleagues当中
        if (new Date(endTime).getFullYear() !== 9999) {
          const workGroups = await ctx.db.workGroups({
            where: {
              AND: [
                { company: { id: companies[0].id } },
                {
                  colleagues_some: {
                    AND: [
                      { worker: { id: user.id } },
                      { status: '1' }
                    ]
                  }
                }
              ]
            }
          })
          if (workGroups.length > 0) {
            const workGroupWorColleagues = await ctx.db.workGroup({
              id: workGroups[0].id
            }).colleagues()
            for (const colleague of workGroupWorColleagues) {
              const oldworker = await ctx.db.colleague({ id: colleague.id }).worker()
              await ctx.db.createOldColleague({
                from: { connect: { id: user.id } },
                to: { connect: { id: oldworker.id } },
                status: '3',
                company: { connect: { id: companies[0].id } }
              })

              await ctx.db.createOldColleague({
                from: { connect: { id: oldworker.id } },
                to: { connect: { id: user.id } },
                status: '3',
                company: { connect: { id: companies[0].id } }
              })
              pubsub.publish(MYOLDCOLLEAGUES_CHANGED, { [MYOLDCOLLEAGUES_CHANGED]: { "text": oldworker.id } })
            }
          }
          // 从所有的组中删除成员
          const allWorkGroups = await ctx.db.workGroups({
            where: {
              AND: [
                { company: { id: companies[0].id } },
                {
                  colleagues_some: {
                    AND: [
                      { worker: { id: user.id } },
                    ]
                  }
                }
              ]
            }
          })

          for (const workGroup of allWorkGroups) {
            const userColleagues = await ctx.db.colleagues({
              where: {
                AND: [
                  { worker: { id: user.id } },
                  { group: { id: workGroup.id } }
                ]
              }
            })
            await ctx.db.updateWorkGroup({
              where: { id: workGroup.id },
              data: { colleagues: { delete: { id: userColleagues[0].id } } }
            })
            const colleagues = await ctx.db.workGroup({ id: workGroup.id }).colleagues()
            for (const colleague of colleagues) {
              const publishWorker = await ctx.db.colleague({ id: colleague.id }).worker()
              if (publishWorker.id !== user.id) {
                pubsub.publish(WORKGROUP_CHANGED, { [WORKGROUP_CHANGED]: { "text": publishWorker.id } })
              }
            }
          }
        }
        pubsub.publish(WORKS_CHANGED, { [WORKS_CHANGED]: { "text": user.id } })
        return updateWork
      }
      throw new Error('未找到对应要更新的工作')
    }
    // 如果公司已经存在 
    if (companies.length > 0) {
      companyId = companies[0].id
      createdWork = await ctx.db.createWork({
        startTime,
        endTime,
        department,
        post: { connect: { id: stationId } },
        company: { connect: { id: companyId } },
        worker: { connect: { uid: userId } }
      })

    } else {
      // 如果公司不存在
      createdWork = await ctx.db.createWork({
        startTime,
        endTime,
        department,
        post: { connect: { id: stationId } },
        company: { create: { name: companyName } },
        worker: { connect: { uid: userId } }
      })
      const company = await ctx.db.work({ id: createdWork.id }).company()
      companyId = company.id
    }

    // 对于刚刚创建的工作，查找所有同时间工作的人
    const works = await ctx.db.works({
      where: {
        AND: [
          {
            OR: [
              { startTime_gte: (new Date(startTime)) },
              { endTime_lte: (new Date(endTime)) },
            ]
          },
          { company: { id: companyId.id } },
        ]
      }
    })

    for (const work of works) {
      // 向所有的人推送通知，重新获取数据
      const worker = await ctx.db.work({ id: work.id }).worker()
      pubsub.publish(COLLEAGUES_ADDED, { [COLLEAGUES_ADDED]: { "text": worker.id } })
    }

    pubsub.publish(WORKS_CHANGED, { [WORKS_CHANGED]: { "text": user.id } })

    return createdWork
  },

  addExamBasicInfo: async (parent, { province, section, score, specialScore, examineeCardNumber }, ctx) => {
    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    // -----------------------------------------------
    // 输入数据验证
    checkNum(province)
    if (!~["none", "arts", "science"].indexOf(section)) {
      throw new Error('选择的文理科不正确')
    }
    checkScore(score)
    checkScore(specialScore)
    checkNum(examineeCardNumber)
    const isExistcandidatenum = await ctx.db.collegeEntranceExam({
      candidatenum: examineeCardNumber,
    })
    if (isExistcandidatenum) {
      throw new Error('准考证号已被人注册，请检查准考证号是否正确，如存在被人盗用情况请联系客服。')
    }
    // -----------------------------------------------
    return ctx.db.createCollegeEntranceExam({
      province: { connect: { code: province } },
      subject: section,
      culscore: parseFloat(score),
      proscore: parseFloat(specialScore),
      candidatenum: examineeCardNumber,
      times: 1,
      student: { connect: { uid: userId } }
    })
  },

  updateExamBasicInfo: async (parent, { province, section, score, specialScore, examineeCardNumber }, ctx) => {
    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    // -----------------------------------------------
    // 输入数据验证
    checkNum(province)
    if (!~["none", "arts", "science"].indexOf(section)) {
      throw new Error('选择的文理科不正确')
    }
    checkScore(score)
    checkScore(specialScore)
    checkNum(examineeCardNumber)
    // -----------------------------------------------
    const oldExamBasicInfo = await ctx.db.collegeEntranceExams({
      where: { student: { uid: userId } }
    })
    if (oldExamBasicInfo.length === 0) {
      throw new Error('尚未创建高考信息')
    }
    if (oldExamBasicInfo[0].times >= 3) {
      throw new Error('你修改的次数已达到上限')
    }

    return ctx.db.updateCollegeEntranceExam({
      where: { id: oldExamBasicInfo[0].id },
      data: {
        province: { connect: { code: province } },
        subject: section,
        culscore: parseFloat(score),
        proscore: parseFloat(specialScore),
        candidatenum: examineeCardNumber,
        times: oldExamBasicInfo[0].times + 1,
      }
    })
  },

  addRegStatus: async (parent, { education, universityId, majorId }, ctx) => {
    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    // -----------------------------------------------
    // 判断是否为付费会员
    const regStatusfeeSettings = await ctx.db.feeSettings({
      where:{name:FEESETTINGTYPES.regstatus}
    })
    if(regStatusfeeSettings.length>0){
      const fee = regStatusfeeSettings[0].fee
      const year = new Date().getFullYear()
      if(fee){
        const trades = await ctx.db.user({uid:userId}).trades({
          where:{
              product:{
                AND:[
                  {kind:FEESETTINGTYPES.regstatus},
                  {subject_contains:`${year}`}
                ]
              }
          }
        })
        if(trades.length>0 ){
           if(trades[0].status!=="1"){
            throw new Error("报名前需要在设置-购买页面中购买本年度高考报名会员")
           }
        }
        throw new Error("报名前需要在设置-购买页面中购买本年度高考报名会员")
      }
    }
    // -----------------------------------------------
    // 输入数据验证
    if (!~(['Undergraduate', 'JuniorCollege'].indexOf(education))) {
      throw new Error('请选择本科或者专科')
    }
    checkId(universityId)
    checkId(majorId)

    // -----------------------------------------------
    // 检查该用户是否已经注册
    const userRegStatus = await ctx.db.user({
      uid: userId
    }).regStatus()
    if (userRegStatus && userRegStatus.id) {
      throw new Error('只能进行一次报名，如需重新报名，请先退出当前报名')
    }


    // 检查是否已经存在相关学校和专业的注册记录
    const regStatuses = await ctx.db.regStatuses({
      where: {
        education,
        university: { id: universityId },
        major: { id: majorId }
      }
    })

    // 如果存在
    let userReg
    if (regStatuses.length > 0) {
      userReg = await ctx.db.updateRegStatus({
        where: { id: regStatuses[0].id },
        data: {
          applicants: { connect: { uid: userId } }
        }
      })
    } else {
      userReg = await ctx.db.createRegStatus({
        education,
        university: { connect: { id: universityId } },
        major: { connect: { id: majorId } },
        applicants: { connect: { uid: userId } }
      })
    }

    return userReg
  },
  cancelRegStatus: async (parent, { id }, ctx) => {
    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    // -----------------------------------------------
    // 输入数据验证
    checkId(id)

    // -----------------------------------------------
    return ctx.db.updateRegStatus({
      where: { id },
      data: { applicants: { disconnect: { uid: userId } } }
    })
  },

  
  addClassGroup: async (parent, { name, schoolEduId, studentId }, ctx) => {
    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    // -----------------------------------------------
    // 输入数据验证
    checkCnEnNum(name)
    checkId(schoolEduId)
    checkId(studentId)

    // -----------------------------------------------

    // 检查studentId是否已经有组,如果有组则把请求者加入得到已有的组中
    const classGroups = await ctx.db.classGroups({
      where: {
        AND: [
          { study: { id: schoolEduId } },
          {
            members_some: {
              AND: [
                { student: { id: studentId } },
                { status: '1' }
              ]
            }
          }
        ]
      }
    })

    if (classGroups.length > 0) {
      // 检查我是否已经在组里了，如果在了，不能重复添加
      const studentClassMates = await ctx.db.classMates({
        where: {
          AND: [
            { student: { id: user.id } },
            { group: { id: classGroups[0].id } }
          ]
        }
      })
      if (studentClassMates.length > 0) {
        throw new Error('你已经提起过申请，无法重复提请')
      }
      const updated = await ctx.db.updateClassGroup({
        where: { id: classGroups[0].id },
        data: { members: { create: { status: '0', student: { connect: { id: user.id } } } } }
      })
      const members = await ctx.db.classGroup({ id: updated.id }).members()
      for (const member of members) {
        const student = await ctx.db.classMate({ id: member.id }).student()
        if (student.id !== user.id) {
          pubsub.publish(CLASSGROUP_CHANGED, { [CLASSGROUP_CHANGED]: { "text": student.id } })
        }
      }

      return updated
    }
    // 如果studentId没有组，则studentId新建一个组，并且把user加入到组中
    // -----------------------------------------------
    const created = await ctx.db.createClassGroup({
      name,
      study: { connect: { id: schoolEduId } },
      members: {
        create: [
          { status: "1", student: { connect: { id: studentId } } },
          { status: "0", student: { connect: { id: user.id } } },
        ]
      }
    })
    pubsub.publish(CLASSGROUP_CHANGED, { [CLASSGROUP_CHANGED]: { "text": studentId } })
    return created

  },
  confirmClassGroup: async (parent, { schoolEduId, studentId }, ctx) => {

    // -----------------------------------------------
    // 输入数据验证
    checkId(schoolEduId)
    checkId(studentId)
    // -----------------------------------------------
    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }


    // 检查studentId是否已经有组,如果有组则把请求者加入得到已有的组中
    const studentClassGroups = await ctx.db.classGroups({
      where: {
        AND: [
          { study: { id: schoolEduId } },
          {
            members_some: {
              AND: [
                { student: { id: studentId } },
                { status: '1' }
              ]
            }
          }
        ]
      }
    })
    const myClassGroups = await ctx.db.classGroups({
      where: {
        AND: [
          { study: { id: schoolEduId } },
          {
            members_some: {
              AND: [
                { student: { id: user.id } },
                { status: '1' }
              ]
            }
          }
        ]
      }
    })
    // 检查student是否是我的组成员
    const InMyGroupstudents = await ctx.db.classGroup(
      { id: myClassGroups[0].id }
    ).members({ where: { student: { id: studentId } } })
    if (InMyGroupstudents.length === 0) {
      throw new Error('搞错了，你还不在这个组里')
    }
    const myClassGroupMembers = await ctx.db.classGroup(
      { id: myClassGroups[0].id }
    ).members()

    // 如果student也有组,且和我不是一个组，则合并我和stuent的组。
    if (studentClassGroups.length > 0 && studentClassGroups[0].id !== myClassGroups[0].id) {
      const studentClassGroupsMembers = await ctx.db.classGroup({
        id: studentClassGroups[0].id
      }).members()
      // 合并到成员多的组中
      if (studentClassGroupsMembers.length >= myClassGroupMembers.length) {
        for (const member of myClassGroupMembers) {
          // 检查member是否已经在studentClassGroup中
          const memeberStudent = await ctx.db.classMate({
            id: member.id
          }).student()
          const inStudentClassGroupStudents = await ctx.db.classMates({
            where: {
              AND: [
                { student: { id: memeberStudent.id } },
                { group: { id: studentClassGroups[0].id } }
              ]
            }
          })
          if (inStudentClassGroupStudents.length > 0) {
            if (member.status !== inStudentClassGroupStudents[0].status) {
              await ctx.db.updateClassMate({
                where: { id: inStudentClassGroupStudents[0].id },
                data: {
                  status: '1',
                  group: { connect: { id: studentClassGroups[0].id } }
                }
              })
            }
            await ctx.db.deleteClassMate({
              id: member.id
            })
          } else {
            await ctx.db.updateClassMate({
              where: { id: member.id },
              data: { group: { connect: { id: studentClassGroups[0].id } } }
            })
          }

        }
        // 删除成员少的组
        await ctx.db.deleteClassGroup({
          id: myClassGroups[0].id
        })

        const members = await ctx.db.classGroup({ id: studentClassGroups[0].id }).members()
        for (const member of members) {
          const student = await ctx.db.classMate({ id: member.id }).student()
          pubsub.publish(CLASSGROUP_CHANGED, { [CLASSGROUP_CHANGED]: { "text": student.id } })
        }

        return studentClassGroups[0]
      }
      for (const member of studentClassGroupsMembers) {
        // 检查member是否已经在MyClassGroup中
        const memeberStudent = await ctx.db.classMate({
          id: member.id
        }).student()
        const inMyClassGroupStudents = await ctx.db.classMates({
          where: {
            AND: [
              { student: { id: memeberStudent.id } },
              { group: { id: myClassGroups[0].id } }
            ]
          }
        })
        if (inMyClassGroupStudents.length > 0) {
          if (member.status !== inMyClassGroupStudents[0].status) {
            await ctx.db.updateClassMate({
              where: { id: inMyClassGroupStudents[0].id },
              data: {
                status: '1',
                group: { connect: { id: myClassGroups[0].id } }
              }
            })
          }
          await ctx.db.deleteClassMate({
            id: member.id
          })
        } else {
          await ctx.db.updateClassMate({
            where: { id: member.id },
            data: { group: { connect: { id: myClassGroups[0].id } } }
          })
        }
      }

      // 删除成员少的组
      await ctx.db.deleteClassGroup({
        id: studentClassGroups[0].id
      })

      const members = await ctx.db.classGroup({ id: myClassGroups[0].id }).members()
      for (const member of members) {
        const student = await ctx.db.classMate({ id: member.id }).student()
        pubsub.publish(CLASSGROUP_CHANGED, { [CLASSGROUP_CHANGED]: { "text": student.id } })
      }
      return myClassGroups[0]
    }
    // 如果student还没有组，则直接合并到我的组中，并更新状态
    const studentClassMates = await ctx.db.classMates({
      where: {
        AND: [
          { student: { id: studentId } },
          { group: { id: myClassGroups[0].id } }
        ]
      }
    })
    await ctx.db.updateClassMate({
      where: { id: studentClassMates[0].id },
      data: { status: '1' }
    })
    const members = await ctx.db.classGroup({ id: myClassGroups[0].id }).members()
    for (const member of members) {
      const student = await ctx.db.classMate({ id: member.id }).student()
      pubsub.publish(CLASSGROUP_CHANGED, { [CLASSGROUP_CHANGED]: { "text": student.id } })
    }
    return myClassGroups[0]
  },

  addWorkGroup: async (parent, { companyId, workerId }, ctx) => {
    // -----------------------------------------------
    // 输入数据验证
    checkId(companyId)
    checkId(workerId)
    // -----------------------------------------------
    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }

    // 检查wokerId是否已经有组,如果有组则把请求者加入得到已有的组中
    const workGroups = await ctx.db.workGroups({
      where: {
        AND: [
          { company: { id: companyId } },
          {
            colleagues_some: {
              AND: [
                { worker: { id: workerId } },
                { status: '1' }
              ]
            }
          }
        ]
      }
    })

    if (workGroups.length > 0) {
      // 检查我是否已经在组里了，如果在了，不能重复添加
      const meColleagues = await ctx.db.colleagues({
        where: {
          AND: [
            { worker: { id: user.id } },
            { group: { id: workGroups[0].id } }
          ]
        }
      })
      if (meColleagues.length > 0) {
        throw new Error('你已经提起过申请，无法重复提请')
      }
      // 如果我没有在组里，则更新group,将我添加进去
      const updated = await ctx.db.updateWorkGroup({
        where: { id: workGroups[0].id },
        data: { colleagues: { create: { status: '0', worker: { connect: { id: user.id } } } } }
      })
      const colleagues = await ctx.db.workGroup({ id: updated.id }).colleagues()
      for (const colleague of colleagues) {
        const worker = await ctx.db.colleague({ id: colleague.id }).worker()
        if (worker.id !== user.id) {
          pubsub.publish(WORKGROUP_CHANGED, { [WORKGROUP_CHANGED]: { "text": worker.id } })
        }
      }

      return updated
    }
    // 如果workId没有组，则workId新建一个组，并且把user加入到组中
    // -----------------------------------------------
    const created = await ctx.db.createWorkGroup({
      company: { connect: { id: companyId } },
      colleagues: {
        create: [
          { status: "1", worker: { connect: { id: workerId } } },
          { status: "0", worker: { connect: { id: user.id } } },
        ]
      }
    })
    pubsub.publish(WORKGROUP_CHANGED, { [WORKGROUP_CHANGED]: { "text": workerId } })
    return created
  },
  confirmWorkGroup: async (parent, { companyId, workerId }, ctx) => {
        // -----------------------------------------------
    // 输入数据验证
    checkId(companyId)
    checkId(workerId)
    // -----------------------------------------------
    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    // -----------------------------------------------
    // 输入数据验证

    // 检查workerId是否已经有组,如果有组则把请求者加入得到已有的组中
    const workerGroups = await ctx.db.workGroups({
      where: {
        AND: [
          { company: { id: companyId } },
          {
            colleagues_some: {
              AND: [
                { worker: { id: workerId } },
                { status: '1' }
              ]
            }
          }
        ]
      }
    })
    const myWorkGroups = await ctx.db.workGroups({
      where: {
        AND: [
          { company: { id: companyId } },
          {
            colleagues_some: {
              AND: [
                { worker: { id: user.id } },
                { status: '1' }
              ]
            }
          }
        ]
      }
    })
    // 检查worker是否是我的组成员
    const InMyGroupWorkers = await ctx.db.workGroup(
      { id: myWorkGroups[0].id }
    ).colleagues({ where: { worker: { id: workerId } } })
    if (InMyGroupWorkers.length === 0) {
      throw new Error('搞错了，你还不在这个组里')
    }
    const myWorkGroupColleagues = await ctx.db.workGroup(
      { id: myWorkGroups[0].id }
    ).colleagues()

    // 如果worker也有组,且和我不是一个组，则合并我和stuent的组。
    if (workerGroups.length > 0 && workerGroups[0].id !== myWorkGroups[0].id) {
      const workerGroupsColleagues = await ctx.db.workGroup({
        id: workerGroups[0].id
      }).colleagues()
      // 合并到成员多的组中
      if (workerGroupsColleagues.length >= myWorkGroupColleagues.length) {
        for (const colleague of myWorkGroupColleagues) {
          // 检查colleague是否已经在wokerGroup中
          const colleagueWorker = await ctx.db.colleague({
            id: colleague.id
          }).worker()
          const inWorkerGroupColleagues = await ctx.db.colleagues({
            where: {
              AND: [
                { worker: { id: colleagueWorker.id } },
                { group: { id: workerGroups[0].id } }
              ]
            }
          })
          if (inWorkerGroupColleagues.length > 0) {
            if (colleague.status !== inWorkerGroupColleagues[0].status) {
              await ctx.db.updateColleague({
                where: { id: inWorkerGroupColleagues[0].id },
                data: {
                  status: '1',
                  group: { connect: { id: workerGroups[0].id } }
                }
              })
            }
            await ctx.db.deleteColleague({
              id: colleague.id
            })
          } else {
            await ctx.db.updateColleague({
              where: { id: colleague.id },
              data: { group: { connect: { id: workerGroups[0].id } } }
            })
          }

        }
        // 删除成员少的组
        await ctx.db.deleteWorkGroup({
          id: myWorkGroups[0].id
        })

        const colleagues = await ctx.db.workGroup({ id: workerGroups[0].id }).colleagues()
        for (const colleague of colleagues) {
          const worker = await ctx.db.colleague({ id: colleague.id }).worker()
          pubsub.publish(WORKGROUP_CHANGED, { [WORKGROUP_CHANGED]: { "text": worker.id } })
        }

        return workerGroups[0]
      }
      for (const colleague of workerGroupsColleagues) {
        // 检查colleague是否已经在MyWorkGroup中
        const colleagueWorker = await ctx.db.colleague({
          id: colleague.id
        }).worker()
        const inMyWorkGroupColleagues = await ctx.db.colleagues({
          where: {
            AND: [
              { worker: { id: colleagueWorker.id } },
              { group: { id: myWorkGroups[0].id } }
            ]
          }
        })
        if (inMyWorkGroupColleagues.length > 0) {
          if (colleague.status !== inMyWorkGroupColleagues[0].status) {
            await ctx.db.updateColleague({
              where: { id: inMyWorkGroupColleagues[0].id },
              data: {
                status: '1',
                group: { connect: { id: myWorkGroups[0].id } }
              }
            })
          }
          await ctx.db.deleteColleague({
            id: colleague.id
          })
        } else {
          await ctx.db.updateColleague({
            where: { id: colleague.id },
            data: { group: { connect: { id: myWorkGroups[0].id } } }
          })
        }
      }

      // 删除成员少的组
      await ctx.db.deleteWorkGroup({
        id: workerGroups[0].id
      })

      const colleagues = await ctx.db.workGroup({ id: myWorkGroups[0].id }).colleagues()
      for (const colleague of colleagues) {
        const worker = await ctx.db.colleague({ id: colleague.id }).worker()
        pubsub.publish(WORKGROUP_CHANGED, { [WORKGROUP_CHANGED]: { "text": worker.id } })
      }
      return myWorkGroups[0]
    }
    // 如果worker还没有组，则直接合并到我的组中，并更新状态
    const workerColleauges = await ctx.db.colleagues({
      where: {
        AND: [
          { worker: { id: workerId } },
          { group: { id: myWorkGroups[0].id } }
        ]
      }
    })
    await ctx.db.updateColleague({
      where: { id: workerColleauges[0].id },
      data: { status: '1' }
    })
    const colleagues = await ctx.db.workGroup({ id: myWorkGroups[0].id }).colleagues()
    for (const colleague of colleagues) {
      const worker = await ctx.db.colleague({ id: colleague.id }).worker()
      pubsub.publish(WORKGROUP_CHANGED, { [WORKGROUP_CHANGED]: { "text": worker.id } })
    }
    return myWorkGroups[0]
  },

  addOldColleague: async (parent, { companyId, workerId }, ctx) => {
        // -----------------------------------------------
    // 输入数据验证
    checkId(companyId)
    checkId(workerId)
    // -----------------------------------------------
    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    // -----------------------------------------------
    // 输入数据验证
    checkId(companyId)
    checkId(workerId)

    const myOldColleague = await ctx.db.createOldColleague({
      from: { connect: { id: user.id } },
      to: { connect: { id: workerId } },
      status: '1',
      company: { connect: { id: companyId } }
    })

    await ctx.db.createOldColleague({
      from: { connect: { id: workerId } },
      to: { connect: { id: user.id } },
      status: '2',
      company: { connect: { id: companyId } }
    })
    pubsub.publish(MYOLDCOLLEAGUES_CHANGED, { [MYOLDCOLLEAGUES_CHANGED]: { "text": workerId } })

    return myOldColleague
  },

  confirmOldColleague: async (parent, { companyId, workerId }, ctx) => {
        // -----------------------------------------------
    // 输入数据验证
    checkId(companyId)
    checkId(workerId)
    // -----------------------------------------------
    // 权限验证
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }

    const myOldColleagues = await ctx.db.oldColleagues({
      where: {
        AND: [
          { from: { id: user.id } },
          { to: { id: workerId } },
          { company: { id: companyId } },
        ]
      }
    })

    const oldColleagueTomes = await ctx.db.oldColleagues({
      where: {
        AND: [
          { from: { id: workerId } },
          { to: { id: user.id } },
          { company: { id: companyId } },
        ]
      }
    })

    if (oldColleagueTomes.length > 0) {
      await ctx.db.updateOldColleague({
        where: { id: oldColleagueTomes[0].id },
        data: { status: '3' },
      })
      pubsub.publish(MYOLDCOLLEAGUES_CHANGED, { [MYOLDCOLLEAGUES_CHANGED]: { "text": workerId } })
    }

    if (myOldColleagues.length > 0) {
      const updatemyOldColleague = await ctx.db.updateOldColleague({
        where: { id: myOldColleagues[0].id },
        data: { status: '3' },
      })
      return updatemyOldColleague
    }

    throw new Error('无法更改同事信息')
  },
  postPhoto: async (parent, { uri }, ctx) => {
            // -----------------------------------------------
    // 输入数据验证
    // uri并不用于数据库
    // -----------------------------------------------
    // 添加头像
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    const ext = getFileExt(uri)
    const name = getFileName(ext)
    const typesMap = { 'jpg': 'jpeg', 'png': 'png', 'gif': 'gif', 'jpeg': 'jpeg', 'bmp': 'bmp' }
    const options = { expires: 1800, method: 'PUT', 'Content-Type': `image/${typesMap[ext]}` }
    const url = ossClient.signatureUrl(`avatars/${name}`, options);
    const avatar = await ctx.db.user({ uid: userId }).avatar()
    let newPhoto
    if (avatar && avatar.id) {
      newPhoto = await ctx.db.updatePhoto({
        where: { id: avatar.id },
        data: {
          name,
          url: `https://gewu-avatar.oss-cn-hangzhou.aliyuncs.com/avatars/${name}`,
        }
      })
    } else {
      newPhoto = await ctx.db.createPhoto({
        name,
        url: `https://gewu-avatar.oss-cn-hangzhou.aliyuncs.com/avatars/${name}`,
        user: { connect: { uid: userId } }
      })
    }
    return { id: newPhoto.id, name, url }
  },

  sendMessage: async (parent, { toId, text = "", image = "" }, ctx) => {
                // -----------------------------------------------
    // 输入数据验证
    checkId(toId)
    // -----------------------------------------------

    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    const userAvatar = await ctx.db.user({ uid: userId }).avatar()

    if (!text && !image) {
      throw new Error('没有发送信息')
    }

    const toUser = await ctx.db.user({ id: toId })
    const toUserAvatar = await ctx.db.user({ id: toId }).avatar()
    // 更新好友，可以添加评论
    await ctx.db.updateUser({
      where: { id: toId },
      data: { friends: { connect: { id: user.id } } }
    })

    if (image) {
      const ext = getFileExt(image)
      const name = getFileName(ext)
      const typesMap = { 'jpg': 'jpeg', 'png': 'png', 'gif': 'gif', 'jpeg': 'jpeg', 'bmp': 'bmp' }
      const options = { expires: 1800, method: 'PUT', 'Content-Type': `image/${typesMap[ext]}` }
      const writeUrl = ossClient.signatureUrl(`images/${name}`, options);
      const readUrl = `https://gewu-avatar.oss-cn-hangzhou.aliyuncs.com/images/${name}`

      const message = await ctx.db.createMessage({
        from: { connect: { id: user.id } },
        to: { connect: { id: toId } },
        text,
        image: {
          create: {
            name,
            url: readUrl
          }
        }
      })


      const messageImage = await ctx.db.message({ id: message.id }).image()
      // imageurl返回给上传图片的人，用于上传图片，由于这里要修改image，所以这里使用手动解析。
      const returnMessage = {
        id: message.id,
        to: {
          id: toUser.id,
          name: toUser.name,
          avatar: toUserAvatar,
        },
        from: {
          id: user.id,
          name: user.name,
          avatar: userAvatar
        },
        text,
        image: {
          ...messageImage,
          url: writeUrl
        },
        createdAt: message.createdAt
      }
      // 返回给订阅者，由于subscription无法解析Message，因此这里手动解析。
      const pubMessage = {
        __typename: "Message",
        id: message.id,
        to: {
          __typename: "User",
          id: toUser.id,
          name: toUser.name,
          avatar: toUserAvatar,
        },
        from: {
          __typename: "User",
          id: user.id,
          name: user.name,
          avatar: userAvatar
        },
        text,
        image: {
          __typename: "Photo",
          id: messageImage.id,
          name: messageImage.name,
          url: messageImage.url
        },
        createdAt: message.createdAt
      }

      pubsub.publish(MESSAGE_ADDED_TOPIC, { [MESSAGE_ADDED_TOPIC]: pubMessage })
      return returnMessage
    }
    // 如果没有上传图片，则直接创建
    const message = await ctx.db.createMessage({
      from: { connect: { id: user.id } },
      to: { connect: { id: toId } },
      text,
    })
    // 手动解析订阅信息
    const pubMessage = {
      __typename: "Messgae",
      id: message.id,
      to: {
        __typename: "User",
        id: toUser.id,
        name: toUser.name,
        avatar: toUserAvatar,
      },
      from: {
        __typename: "User",
        id: user.id,
        name: user.name,
        avatar: userAvatar
      },
      text,
      image: null,
      createdAt: message.createdAt
    }

    const returnMessage = {
      id: message.id,
      to: {
        id: toUser.id,
        name: toUser.name,
        avatar: toUserAvatar,
      },
      from: {
        id: user.id,
        name: user.name,
        avatar: userAvatar
      },
      text,
      image: null,
      createdAt: message.createdAt
    }
    pubsub.publish(MESSAGE_ADDED_TOPIC, { [MESSAGE_ADDED_TOPIC]: pubMessage })
    return returnMessage
  },

  sendGroupMessage: async (parent, { type, toId, text = "", image = "" }, ctx) => {

    // 输入数据检查
    // ----------------------
    checkId(toId)
    if(!validator.isAlpha(type)){
      throw new Error('组类型错误')
    }

    // ----------------------
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }

    // ----------------------
    checkId(toId)
    const types = ["Family", "ClassMate", "Colleague", "FellowTownsman", "RegStatus"]
    if (!~types.indexOf(type)) {
      throw new Error('没有该组类型')
    }
    // 检查用户是否在该组内，不在该组内不能发信息

    // ----------------------


    const userAvatar = await ctx.db.user({ uid: userId }).avatar()

    if (!text && !image) {
      throw new Error('没有发送信息')
    }
    let toGroup
    if (type === "Family") {
      toGroup = await ctx.db.familyGroup({ id: toId })
    } else if (type === "ClassMate") {
      toGroup = await ctx.db.classGroup({ id: toId })
    } else if (type === "Colleague") {
      toGroup = await ctx.db.workGroup({ id: toId })
    } else if (type === "FellowTownsman") {
      toGroup = await ctx.db.locationGroup({ id: toId })
      const FollowTownsmanUsers = await ctx.db.locationGroup({ id: toId }).users()
      if(FollowTownsmanUsers.filter(u=>u.id===user.id).length===0){
        throw new Error('你不在该组，无法发送消息')
      }
    } else if (type === "RegStatus") {
      toGroup = await ctx.db.regStatus({ id: toId })
      const regstatusUsers = await ctx.db.regStatus({ id: toId }).applicants()
      if(regstatusUsers.filter(u=>u.id===user.id).length===0){
        throw new Error('你不在该组，无法发送消息')
      }
    }
    if (!toGroup) {
      throw new Error('没有找到对应的组')
    }

    if (image) {
      const ext = getFileExt(image)
      const name = getFileName(ext)
      const typesMap = { 'jpg': 'jpeg', 'png': 'png', 'gif': 'gif', 'jpeg': 'jpeg', 'bmp': 'bmp' }
      const options = { expires: 1800, method: 'PUT', 'Content-Type': `image/${typesMap[ext]}` }
      const writeUrl = ossClient.signatureUrl(`images/${name}`, options);
      const readUrl = `https://gewu-avatar.oss-cn-hangzhou.aliyuncs.com/images/${name}`

      const message = await ctx.db.createGroupMessage({
        from: { connect: { id: user.id } },
        type,
        to: toId,
        text,
        image: {
          create: {
            name,
            url: readUrl
          }
        }
      })


      const messageImage = await ctx.db.groupMessage({ id: message.id }).image()
      // imageurl返回给上传图片的人，用于上传图片，由于这里要修改image，所以这里使用手动解析。
      const returnMessage = {
        id: message.id,
        type,
        to: toId,
        from: {
          id: user.id,
          name: user.name,
          avatar: userAvatar
        },
        text,
        image: {
          ...messageImage,
          url: writeUrl
        },
        createdAt: message.createdAt
      }
      // 返回给订阅者，由于subscription无法解析Message，因此这里手动解析。
      const pubMessage = {
        __typename: "GroupMessage",
        id: message.id,
        type,
        to: toId,
        from: {
          __typename: "User",
          id: user.id,
          name: user.name,
          avatar: userAvatar
        },
        text,
        image: {
          __typename: "Photo",
          id: messageImage.id,
          name: messageImage.name,
          url: messageImage.url
        },
        createdAt: message.createdAt
      }

      pubsub.publish(GMESSAGE_ADDED_TOPIC, { [GMESSAGE_ADDED_TOPIC]: pubMessage })

      return returnMessage
    }
    // 如果没有上传图片，则直接创建
    const message = await ctx.db.createGroupMessage({
      from: { connect: { id: user.id } },
      to: toId,
      type,
      text,
    })
    // 手动解析订阅信息
    const pubMessage = {
      __typename: "GroupMessgae",
      id: message.id,
      type,
      to: toId,
      from: {
        __typename: "User",
        id: user.id,
        name: user.name,
        avatar: userAvatar
      },
      text,
      image: null,
      createdAt: message.createdAt
    }

    const returnMessage = {
      id: message.id,
      type,
      to: toId,
      from: {
        id: user.id,
        name: user.name,
        avatar: userAvatar
      },
      text,
      image: null,
      createdAt: message.createdAt
    }

    pubsub.publish(GMESSAGE_ADDED_TOPIC, { [GMESSAGE_ADDED_TOPIC]: pubMessage })
    pubsub.publish(MESSAGE_ADDED_TOPIC, { [MESSAGE_ADDED_TOPIC]: pubMessage })
    return returnMessage
  },

  addAdvertisement: async (parent, { url, startTime }, ctx) => {

    // -------------------------
    if(!validator.isURL(url)){
      throw new Error('url格式错误')
    }

    // -------------------------
    
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }

    const sTime = new Date(startTime)

    const advertisements = await ctx.db.advertisements({
      where: {
        startTime:sTime,
      }
    })

    let newAdvertisement
    if (advertisements.length > 0) {
      if (!advertisements[0].image1) {
        newAdvertisement = await ctx.db.updateAdvertisement({
          where: { id: advertisements[0].id },
          data: { image1: url }
        })
      } else if (!advertisements[0].image2) {
        newAdvertisement = await ctx.db.updateAdvertisement({
          where: { id: advertisements[0].id },
          data: { image2: url }
        })
      } else if (!advertisements[0].image3) {
        newAdvertisement = await ctx.db.updateAdvertisement({
          where: { id: advertisements[0].id },
          data: { image3: url }
        })
      } else if (!advertisements[0].image4) {
        newAdvertisement = await ctx.db.updateAdvertisement({
          where: { id: advertisements[0].id },
          data: { image4: url }
        })
      } else if (!advertisements[0].image5) {
        newAdvertisement = await ctx.db.updateAdvertisement({
          where: { id: advertisements[0].id },
          data: { image5: url }
        })
      } else {
        throw new Error('没有剩余广告位')
      }
    }else{
      newAdvertisement = await ctx.db.createAdvertisement({
        image1:url,
        startTime:sTime,
        endTime:new Date(sTime.getTime() + 30*60*1000)
      })
    }

    return newAdvertisement
  },

  newTrade:async (parent, { productId, number,amount }, ctx) => {

    // -------------------------
    if(!validator.isFloat(`${amount}`)){
      throw new Error('amount格式错误')
    }
    if(!validator.isInt((`${number}`))){
      throw new Error('amount格式错误')
    }
    checkId(productId)
    // -------------------------
    
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }

    const product = await ctx.db.product({id:productId})
    const totalAmount = product.price * number
    if(totalAmount!==amount){
      throw new Error("金额计算错误")
    }

    return ctx.db.createTrade({
      product: { connect: { id: productId } },
      user: { connect: { uid: userId } },
      number,
      amount,
      status:'0'
    })
  },

  addOrUpdateLoveSetting:async (parent, { myHeight,myWeight,otherHeightMin,otherHeightMax,
    otherWeightMin,otherWeightMax,otherAgeMin,otherAgeMax,dateTime,datePlace
   }, ctx) => {

    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    const userGender = await ctx.db.user({ uid: userId }).gender()

    // -------------------------
    if(!validator.isInt(`${myHeight}`)){
      throw new Error('身高格式错误')
    }
    if(!validator.isInt((`${myWeight}`))){
      throw new Error('体重格式错误')
    }
    if(!validator.isInt((`${otherHeightMin}`))){
      throw new Error('对方最低身高格式错误')
    }
    if(!validator.isInt((`${otherHeightMax}`))){
      throw new Error('对方最高身高格式错误')
    }
    if(!validator.isInt((`${otherWeightMin}`))){
      throw new Error('对方最小体重格式错误')
    }
    if(!validator.isInt((`${otherWeightMax}`))){
      throw new Error('对方最大体重格式错误')
    }
    if(!validator.isInt((`${otherAgeMin}`))){
      throw new Error('对方最小年龄格式错误')
    }
    if(!validator.isInt((`${otherAgeMax}`))){
      throw new Error('对方最大年龄格式错误')
    }
    if(userGender==='female'){
      if (!/^[A-Za-z0-9\u4e00-\u9fa5]+/.test(dateTime)){
        throw new Error('见面时间格式错误')
      }
      if (!/^[A-Za-z0-9\u4e00-\u9fa5]+/.test(datePlace)){
        throw new Error('见面地点格式错误')
      }
    }
    // -------------------------
    const loveSettings = await ctx.db.loveSettings({
      where:{user:{uid:userId}}
    })
    let loveSetting
    if(loveSettings.length>0){
      loveSetting =  await ctx.db.updateLoveSetting({
        where:{id:loveSettings[0].id},
        data:{
          myHeight,
          myWeight,
          otherHeightMin,
          otherHeightMax,
          otherWeightMin,
          otherWeightMax,
          otherAgeMax,
          otherAgeMin,
          dateTime,
          datePlace,
        }
      })
    }else{
      loveSetting =  await ctx.db.createLoveSetting({
          myHeight,
          myWeight,
          otherHeightMin,
          otherHeightMax,
          otherWeightMin,
          otherWeightMax,
          otherAgeMax,
          otherAgeMin,
          dateTime,
          datePlace,
          user:{connect:{uid:userId}}
      })
    }
    return loveSetting
  },
  addOrUpdateLoveSignUp:async (parent, args, ctx) => {

    // -------------------------
   
    
    
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    // -------------------------
    // 判断是否为付费会员

     // -------------------------

    const residence = await ctx.db.user({ uid: userId }).residence()
    let city
    if(residence){
      city = await ctx.db.user({ uid: userId }).residence().city()
    }else{
      throw new Error('尚未填写居住地')
    }


    const now = new Date()
    const week = now.getDay()
    if (week === 0 || week === 5 || week === 6) {
        throw new Error('报名已截止')
    }
    
    const phase = parseInt(`${(now.getTime() - DateStartTime.getTime()) / 1000 / 60 / 60 / 24 / 7}`,10) + 1
    
    const loveSignUps = await ctx.db.loveSignUps({
      where:{person:{uid:userId}}
    })
    
    let loveSignUp
    if(loveSignUps.length>0){
      loveSignUp = await ctx.db.updateLoveSignUp({
        where:{id:loveSignUps[0].id},
        data:{
          period:`${phase}`,
          city:{connect:{id:city.id}},
          person:{connect:{id:user.id}}
        }
      })
    }else{
      loveSignUp = await ctx.db.createLoveSignUp({
        period:`${phase}`,
        city:{connect:{id:city.id}},
        person:{connect:{id:user.id}}
      })
    }
    return loveSignUp
  },
  addSkill:async (parent, { name }, ctx) => {

    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }

    // -------------------------
    if (!/^[A-Za-z0-9\u4e00-\u9fa5]+/.test(name)){
      throw new Error('技能名称错误')
    }
    // -------------------------

    const skills = await ctx.db.skills({
      where:{name}
    })

    let skill

    if(skills.length>0){
      skill = await ctx.db.updateSkill({
        where:{id:skills[0].id},
        data:{persons:{connect:{uid:userId}}}
      })
    }else{
      skill = await ctx.db.createSkill({
        name,
        persons:{connect:{uid:userId}}
      })
    }
    
    return skill
  },
  createProject:async (parent, { name, content }, ctx) => {

    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }

    const city = await ctx.db.user({ uid: userId }).residence().city()

    // -------------------------
    if (!/^[_,.，。！!;；：:A-Za-z0-9\u4e00-\u9fa5]+/.test(name)){
      throw new Error('项目名称格式错误')
    }
    if (!/^[_,.，。！!;；：:A-Za-z0-9\u4e00-\u9fa5]+/.test(content)){
      throw new Error('项目内容格式错误')
    }
    // -------------------------
    return ctx.db.createProject({
      name,
      content,
      place:{connect:{id:city.id}},
      starter:{connect:{id:user.id}}
    })

  },
  addPartnerCondition:async (parent, { skillName, number,place,projectId }, ctx) => {

    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }


    // -------------------------
     if (!/^[A-Za-z0-9\u4e00-\u9fa5]+/.test(skillName)){
      throw new Error('技能名称错误')
    }
    if(!validator.isInt(`${number}`)){
      throw new Error('数字格式错误')
    }
    if(!~["0","1","2"].indexOf(place)){
      throw new Error('未选择地址')
    }
    checkId(projectId)
    // -------------------------
    let persons
    if(place==="0"){
      const city = await ctx.db.user({ uid: userId }).residence().city()
      persons = await ctx.db.skill({name:skillName}).persons({
        where:{
          AND:[
            {residence:{city:{code:city.code}}},
            {id_not:user.id}
          ]
          
        },
        first:parseInt(number,10)
      })
    }else if(place==="1"){
      const province = await ctx.db.user({ uid: userId }).residence().province()
      persons = await ctx.db.skill({name:skillName}).persons({
        where:{
          AND:[
            {residence:{province:{code:province.code}}},
            {id_not:user.id}
          ]
        },
        first:parseInt(number,10)
      })
    }else if(place === "2"){
      persons = await ctx.db.skill({name:skillName}).persons({
        where:{id_not:user.id},
        first:parseInt(number,10)
      })
    }

    const personsIds = persons.map(person=>({id:person.id}))
   
    const partnerCondition = await ctx.db.createPartnerCondition({
      skillName,
      place,
      number,
      partners:{connect:personsIds},
      project:{connect:{id:projectId}}
    })
    
    return partnerCondition
  },
  deletePartnerCondition:async (parent, { id }, ctx) => {

    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }

    // -------------------------
    checkId(id)
    // -------------------------
    
    const deletePartnerCondition = await ctx.db.deletePartnerCondition({
      id,
    })
    return deletePartnerCondition
  },
  changePartner:async (parent, { conditionId,uid }, ctx) => {

    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }

    // -------------------------
    checkId(conditionId)
    checkId(uid)
    // -------------------------
    const partnerCondition = await ctx.db.partnerCondition({id:conditionId})
    const partners = await ctx.db.partnerCondition({id:conditionId}).partners()
    const partnersId = partners.map(partner=>partner.id)
    const passedPartners = await ctx.db.partnerCondition({id:conditionId}).passedPartners()
    const passedPartnersId = passedPartners.map(passedPartner=>passedPartner.id)
    const ids = [...partnersId,...passedPartnersId,user.id]
    let persons
    if(partnerCondition.place==="0"){
      const city = await ctx.db.user({ uid: userId }).residence().city()
      persons = await ctx.db.skill({name:partnerCondition.skillName}).persons({
        where:{
          AND:[
            {residence:{city:{code:city.code}}},
            {id_not_in:ids}
          ]
          
        },
        first:1
      })
    }else if(partnerCondition.place==="1"){
      const province = await ctx.db.user({ uid: userId }).residence().province()
      persons = await ctx.db.skill({name:partnerCondition.skillName}).persons({
        where:{
          AND:[
            {residence:{province:{code:province.code}}},
            {id_not_in:ids}
          ]
        },
        first:1
      })
    }else if(partnerCondition.place === "2"){
      persons = await ctx.db.skill({name:partnerCondition.skillName}).persons({
        where:{id_not_in:ids},
        first:1
      })
    }
    
    let changePartner
    if(persons.length>0){
      changePartner = await ctx.db.updatePartnerCondition({
        where:{id:conditionId},
        data:{
          partners:{
            disconnect:{id:uid},
            connect:{id:persons[0].id}
          },
          passedPartners:{
            connect:{id:uid}
          }
        }
      })
    }else{
      changePartner = await ctx.db.updatePartnerCondition({
        where:{id:conditionId},
        data:{
          partners:{
            disconnect:{id:uid},
          },
          passedPartners:{
            connect:{id:uid}
          }
        }
      })
    }
    
    return changePartner
  },
  refreshPartner:async (parent, { conditionId }, ctx) => {

    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }

    // -------------------------
    checkId(conditionId)
    // -------------------------
    const partnerCondition = await ctx.db.partnerCondition({id:conditionId})
    const partners = await ctx.db.partnerCondition({id:conditionId}).partners()
    const partnersId = partners.map(partner=>partner.id)
    const passedPartners = await ctx.db.partnerCondition({id:conditionId}).passedPartners()
    const passedPartnersId = passedPartners.map(passedPartner=>passedPartner.id)
    const ids = [...partnersId,...passedPartnersId,user.id]
    let persons
    if(partnerCondition.place==="0"){
      const city = await ctx.db.user({ uid: userId }).residence().city()
      persons = await ctx.db.skill({name:partnerCondition.skillName}).persons({
        where:{
          AND:[
            {residence:{city:{code:city.code}}},

            {id_not_in:ids}
          ]
          
        },
        first:partnerCondition.number
      })
    }else if(partnerCondition.place==="1"){
      const province = await ctx.db.user({ uid: userId }).residence().province()
      persons = await ctx.db.skill({name:partnerCondition.skillName}).persons({
        where:{
          AND:[
            {residence:{province:{code:province.code}}},
            {id_not_in:ids}
          ]
        },
        first:partnerCondition.number
      })
    }else if(partnerCondition.place === "2"){
      persons = await ctx.db.skill({name:partnerCondition.skillName}).persons({
        where:{id_not_in:ids},
        first:partnerCondition.number
      })
    }
    
    const personsIds = persons.map(person=>({id:person.id}))
    let refreshPartner 
    if(persons.length>0){
      refreshPartner = await ctx.db.updatePartnerCondition({
        where:{id:conditionId},
        data:{
          partners:{
            connect:personsIds
          },
        }
      })
    }else{
      refreshPartner = partnerCondition
    }
    
    return refreshPartner
  },
  refusePartner:async (parent, { conditionId }, ctx) => {

    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }

    // -------------------------
    checkId(conditionId)
    // -------------------------
    const refusePartner = await ctx.db.updatePartnerCondition({
      where:{id:conditionId},
      data:{
        partners:{
          disconnect:{id:user.id},
        },
        passedPartners:{
          connect:{id:user.id}
        }
      }
    })
   
    return refusePartner
  },
}
