import { hash, compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import uuidv4 from 'uuid/v4'

import {
  APP_SECRET,
  getUserId,
  updateCommonUserFamily,
  getCommonFamilies,
  getIntersectionFamiles,
  getDifferentFamilies,
  createFamilyGroupById,
} from '../services/utils'

import getBasicInfoData from '../services/displayBasicInfoData'
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
import { FAMILY_CHANGED, FAMILYGROUP_CHANGED,CLASSGROUP_CHANGED } from './Subscription'
import { pubsub } from '../subscriptions';
import { fee } from '../services/settings'

const pubGroupFamily = async (familyGroup, ctx) => {
  const groupFamilies = await ctx.db.familyGroup({ id: familyGroup.id }).families()
  for (const family of groupFamilies) {
    const user = await ctx.db.family({ id: family.id }).to().user()
    if (user) {
      pubsub.publish(FAMILYGROUP_CHANGED, { [FAMILYGROUP_CHANGED]: { "text": user.id } })
    }
  }
}

export const Mutation = {
  signup: async (parent, { username, password }, ctx) => {
    // 输入数据验证
    checkUsername(username)
    checkPassword(password)

    const hasuser = await ctx.db.user({ username })
    if (hasuser) {
      throw new Error(`${username}已经被占用`)
    }
    // -------------------------------------
    const hashedPassword = await hash(password, 10)
    const uid = uuidv4()
    const token = sign({ userId: uid }, APP_SECRET)
    const user = await ctx.db.createUser({
      username,
      password: hashedPassword,
      uid,
      token,
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

  addBasicInfo: async (parent, { name, gender, birthday, birthplace }, ctx) => {
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
    validateBasicInfo(name, gender, birthday, birthplace)
    // -----------------------------------------------
    // 获取要输入的数据。
    const data = getBasicInfoData(name, gender, birthday, birthplace)
    const updateUser = ctx.db.updateUser({
      where: { uid: userId },
      data
    })
    // 添加location group

    const villages = await ctx.db.villages({ where: { code: birthplace.village } })
    const groups = await ctx.db.groups({ where: { type: 'Location', typeId: villages[0].id } })
    if (groups.length > 0) {
      await ctx.db.updateGroup({
        where: { id: groups[0].id },
        data: { users: { connect: { uid: userId } } }
      })
    } else {
      await ctx.db.createGroup({
        type: 'Location',
        typeId: villages[0].id,
        name: villages[0].name,
        users: { connect: { uid: userId } }
      })
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
    console.log('relativeId', relativeId)
    console.log('发送订阅1')
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
          console.log('发送订阅2')
          pubsub.publish(FAMILY_CHANGED, { [FAMILY_CHANGED]: { "text": relative.id } })
        }
        else {
          // 如果relative的status大于我的家庭成员的status，则更新我的family
          // 更新我的family
          await ctx.db.updateFamily({
            where: { id: myCommonFamily.id },
            data: {
              status: relativeToCommonUserFamily[0].status,
              to: { where: { id: relativeToCommonUserFamilyTo.id } }
            }
          })

          if (relativeToCommonUserFamily[0].status > 0) {
            // 如果等于0,则还没有共同的user,无需更新,如果大于0，则要更新CommonUser
            await updateCommonUserFamily(relative, relativeRelationship, relativeToCommonUserFamily[0], user, myRelationship, ctx)
          }
          // 像我推送“familyChanged"
          // console.log('发送订阅3')
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
      // console.log('发送订阅4')
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
      console.log('发送订阅6')
      pubsub.publish(FAMILY_CHANGED, { [FAMILY_CHANGED]: { "text": relative.id } })
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
    // validateBasicInfo(name, gender, birthday, birthplace)
    // -----------------------------------------------
    // 获取要输入的数据。 
    // 获取学校地址
    let place
    place = await ctx.db.location({ name: locationName })
    console.log(place)
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
        const res0 = await ctx.db.createSchoolEdu({
          startTime,
          grade,
          className,
          school: { connect: { id: schoolId } },
          students: { connect: { uid: userId } }
        })
        return res0
      }

      const res1 = await ctx.db.updateSchoolEdu(
        {
          where: { id: schoolEdus[0].id },
          data: { students: { connect: { uid: userId } } }
        }
      )
      return res1
    }

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
      const res2 = await ctx.db.createSchoolEdu({
        startTime,
        grade,
        className,
        school: { connect: { id: schoolId } },
        major: { connect: { id: majorId } },
        students: { connect: { uid: userId } }
      })
      return res2
    }

    const res3 = await ctx.db.updateSchoolEdu(
      {
        where: { id: schoolEdus[0].id },
        data: { students: { connect: { uid: userId } } }
      }
    )
    return res3
  },

  addOrUpdateWork: async (parent, { companyName, startTime, endTime, department, stationId,updateId }, ctx) => {
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
    // -----------------------------------------------
    const companies = await ctx.db.companies({ where: { name: companyName } })
    // 如果要是更新的话
    if(updateId){
      const work = await ctx.db.work({id:updateId})
      if(work){
        const worker = await ctx.db.work({id:updateId}).worker()
        if(worker.id!==user.id){
          throw new Error('你没有权利修改')
        }
        if(companies.length===0){
          throw new Error('无法修改公司名称')
        }
        return ctx.db.updateWork({
          where:{id:updateId},
          data:{
            startTime,
            endTime,
            department,
            post:{connect:{id:stationId}},
          }
        })
      }
      throw new Error('未找到对应要更新的工作')
    }
    // 获取要输入的数据。 
    if (companies.length > 0) {
      return ctx.db.createWork({
        startTime,
        endTime,
        department,
        post:{connect:{id:stationId}},
        company: { connect: { id: companies[0].id } },
        worker: { connect: { uid: userId } }
      })
    }
    return ctx.db.createWork({
      startTime,
      endTime,
      department,
      post:{connect:{id:stationId}},
      company: { create: { name: companyName } },
      worker: { connect: { uid: userId } }
    })
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

    if (fee) {
      if (user.regTimes >= user.maxRegTimes) {
        throw new Error('你的报名次数已用完,请充值后再继续报名')
      }
      await ctx.db.updateUser({
        where: { uid: userId },
        data: { regTimes: user.regTimes + 1 }
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

  refreshMyFamilyGroups: async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
   
    const groupUsersId = []
    const meAndSpousesfamilies = []
    groupUsersId.push({id:user.id})
    const meFamilies = await ctx.db.user({ id: user.id }).families()
    meAndSpousesfamilies.push(meFamilies)
    // 配偶
    const mySpouseFamilies = meFamilies.filter(family=>!!~['wife','husband'].indexOf(family.relationship))
    console.log(mySpouseFamilies)
    for (const mySpouseFamily of mySpouseFamilies ){
      const mySpouse = await ctx.db.family({id:mySpouseFamily.id}).to().user()
      if(mySpouse){
        groupUsersId.push({id:mySpouse.id})
        const spouseFamilies = await ctx.db.user({id:mySpouse.id}).families()
        console.log('spouseFamilies',spouseFamilies)
        meAndSpousesfamilies.push(spouseFamilies)
      }
    }
    console.log(meAndSpousesfamilies)
    for(const myFamilies of meAndSpousesfamilies){
      // 我和配偶的家庭组全部创建
      // parents
      let p
        // father's parents
      let fp
      // father's father's parents
      let ffp
      // father's mother's parents
      let fmp
      // mother's parents
      let mp
      // mother's father's parents
      let mfp
      // mother's mother's parents
      let mmp
      // 如果有mother pa或者其上面的父母
      let mpast
      // 如果有father pa或者其上面的父母
      let fpast
      console.log('start')
      // 创建父母群
      const me = await ctx.db.family({id:myFamilies[0].id}).from()
      if(me.id===user.id){
        p = await createFamilyGroupById(me.id, ctx)
      }else{
        try{
          p = await createFamilyGroupById(me.id, ctx)
        }catch(error){
          console.log(error)
        }
      }
      console.log('p', p)
      // 创建父母的父母群
      
      const familyFather = myFamilies.filter(family => family.relationship === 'father')
      const father = await ctx.db.family({ id: familyFather[0].id }).to().user()
      console.log('father', father)
      if (father) {
        // 创建祖父母群
        try {
          groupUsersId.push({ id: father.id })
          fp = await createFamilyGroupById(father.id, ctx)
          console.log('fp', fp)
          // 创建爷爷和奶奶的父母
          const fatherFamilies = await ctx.db.user({ id: father.id }).families()
          const fatherFamilyFather = fatherFamilies.filter(family => family.relationship === 'father')
          const grandpa = await ctx.db.family({ id: fatherFamilyFather[0].id }).to().user()
          console.log('grandpa', grandpa)
          if (grandpa) {
            // 创建曾祖父母
            groupUsersId.push({ id: grandpa.id })
            ffp = await createFamilyGroupById(grandpa.id, ctx)
            console.log('ffp', ffp)
          }
          const motherFamilyFather = fatherFamilies.filter(family => family.relationship === 'mother')
          const grandma = await ctx.db.family({ id: motherFamilyFather[0].id }).to().user()
          console.log('grandma', grandma)
          if (grandma) {
            // 创建曾外祖父
            groupUsersId.push({ id: grandma.id })
            fmp = await createFamilyGroupById(grandma.id, ctx)
            console.log('fmp', fmp)
          }
        } catch (error) {
          console.log(error.message)
        }
      }
      const familyMother = myFamilies.filter(family => family.relationship === 'mother')
      const mother = await ctx.db.family({ id: familyMother[0].id }).to().user()
      console.log('mother', mother)
      if (mother) {
        try {
          // 创建外祖父母群
          groupUsersId.push({ id: mother.id })
          mp = await createFamilyGroupById(mother.id, ctx)
          console.log('mp', mp)
          // 创建姥姥和姥爷的父母
          const motherFamilies = await ctx.db.user({ id: mother.id }).families()
          const fatherFamilyMother = motherFamilies.filter(family => family.relationship === 'father')
          const grandpa = await ctx.db.family({ id: fatherFamilyMother[0].id }).to().user()
          console.log('grandpa', grandpa)
          if (grandpa) {
            // 创建外曾祖父母
            groupUsersId.push({ id: grandpa.id })
            mfp = await createFamilyGroupById(grandpa.id, ctx)
            console.log('mfp', mfp)
          }
          const motherFamilyMother = motherFamilies.filter(family => family.relationship === 'mother')
          const grandma = await ctx.db.family({ id: motherFamilyMother[0].id }).to().user()
          console.log('grandma', grandma)
          if (grandma) {
            // 创建外曾外祖父母
            groupUsersId.push({ id: grandma.id })
            mmp = await createFamilyGroupById(grandma.id, ctx)
            console.log('mmp', mmp)
          }
        } catch (error) {
          console.log(error.message)
        }
      }

      // 向所有的成员推送通知
      if (mmp || mfp) {
        // 分别推送到mmp中的所有family.user和mfp的所有family.user
        if (mmp) {
          pubGroupFamily(mmp, ctx)
        }
        if (mfp) {
          pubGroupFamily(mfp, ctx)
        }
        mpast = true
      } else if (mp) {
        // 推送到mp的所有family.user
        pubGroupFamily(mp, ctx)
        mpast = true
      }

      if (ffp || fmp) {
        if (ffp) {
          pubGroupFamily(ffp, ctx)
        }
        if (fmp) {
          pubGroupFamily(ffp, ctx)
        }
        fpast = true
      } else if (fp) {
        pubGroupFamily(fp, ctx)
        fpast = true
      }

      if (!fpast && !mpast) {
        // 推送到p的所有family.user
        pubGroupFamily(p, ctx)
      }
    }

    // 我的群由子女负责创建
    const sonAndDaughters = meFamilies.filter(family=>!!~['son','daughter'].indexOf(family.relationship))
    for(const sonAndDaughter of sonAndDaughters){
      const sd = await ctx.db.family({id:sonAndDaughter.id}).to().user()
      if(sd){
        groupUsersId.push({id:sd.id})
      }
    }

    return ctx.db.familyGroups({
      where: {
        OR: groupUsersId.map(usersId => ({ users_some: usersId }))
      }
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
      const members = await ctx.db.classGroup({id:updated.id}).members()
      for(const member of members){
        const student = await ctx.db.classMate({id:member.id}).student()
        if(student.id!==user.id){
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
    if (studentClassGroups.length > 0 && studentClassGroups[0].id!==myClassGroups[0].id) {
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

        const members = await ctx.db.classGroup({id:studentClassGroups[0].id}).members()
        for(const member of members){
          const student = await ctx.db.classMate({id:member.id}).student()
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

      const members = await ctx.db.classGroup({id:myClassGroups[0].id}).members()
      for(const member of members){
        const student = await ctx.db.classMate({id:member.id}).student()
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
    const members = await ctx.db.classGroup({id:myClassGroups[0].id}).members()
    for(const member of members){
      const student = await ctx.db.classMate({id:member.id}).student()
      pubsub.publish(CLASSGROUP_CHANGED, { [CLASSGROUP_CHANGED]: { "text": student.id } })
    }
    return myClassGroups[0]
  },


  createDraft: async (parent, { title, content, authorEmail }, ctx) => ctx.db.createPost({
    title,
    content,
    author: { connect: { email: authorEmail } },
  }),


  deletePost: async (parent, { id }, ctx) => {
    const userId = getUserId(ctx)
    const author = await ctx.db
      .post({ id })
      .author()
      .$fragment('{ id }')
    const authorId = author.id
    if (userId !== authorId) {
      throw new Error('Author Invalid')
    }

    return ctx.db.deletePost({ id })
  },

  publish: async (parent, { id }, ctx) => ctx.db.updatePost({
    where: { id },
    data: { isPublished: true },
  }),
}
