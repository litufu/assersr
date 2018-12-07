import { hash, compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import uuidv4 from 'uuid/v4'

import {
  APP_SECRET,
  getUserId,
  updateCommonUserFamily,
  getCommonFamilies,
  getIntersectionFamiles,
  getDifferentFamilies
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
} from '../validate'
import {
  relationshipMap,
  relationIntersectionNew,
  relationshipGenderMap,
  relationshipTOGender,
} from "../services/relationship"
import { FAMILY_CHANGED } from './Subscription'
import { pubsub } from '../subscriptions';

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

    return ctx.db.updateUser({
      where: { uid: userId },
      data
    })
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
    pubsub.publish(FAMILY_CHANGED, { [FAMILY_CHANGED]: {"text":relativeId} })
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
    console.log('确认family')
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
    console.log(myUpdateFamily)
    // 获取relative famliy
    // 获取relative
    const relative = await ctx.db.family(
       { id: familyId },
    ).to().user()
    console.log(relative)
    // 获取relative Family
    const relativeFamily = await ctx.db.user({ id: relative.id }).families({ where: { to: { user: { uid: userId } } } })
    console.log(relativeFamily)
    // 更新relative family  status
     const relativeFamilyUpdate = await ctx.db.updateFamily({
      where: { id: relativeFamily[0].id },
      data: { status: "3" }
    })
    console.log(relativeFamilyUpdate)
    // 删除多余的person 见deletePersons
    // 没有必要每个删除，可以定时的删除所有family为[],并且user 为null的person.

    // 合并相同的亲人
    // 将共同的亲人分为三部分，一部分是me和relative都有的commonuser,第二部分是me有relative没有的，第三部分是relative有me没有的。
    // 我的家庭成员==》我的共同家庭成员==》使用我的共同家庭成员同步relative的family，同时更新共同家庭成员family
    // rel的家庭成员==》rel的共同家庭成员==》使用rel的共同家庭成员同步我的family，同时更新共同家庭成员family

    const myRelationship = myUpdateFamily.relationship
    console.log(myRelationship)
    const relativeRelationship = relativeFamily[0].relationship
    console.log(relativeRelationship)
    const myFamilies = await ctx.db.user({ uid: userId }).families()
    console.log(myFamilies)
    const relativeFamilies = await ctx.db.user({ id: relative.id }).families()
    console.log(relativeFamilies)
    // 获取共同的亲人
    const myCommonFamilies = await getCommonFamilies(relativeRelationship, myFamilies, myUpdateFamily.id,ctx)
    console.log(myCommonFamilies)
    const relativeCommonFamilies = await getCommonFamilies(myRelationship, relativeFamilies, relativeFamily[0].id,ctx)
    console.log(relativeCommonFamilies)
    // 获取共同家庭成员的交集
    const { myIntersectionFamilies, relativeIntersectionFamilies } = await getIntersectionFamiles(myCommonFamilies, relativeCommonFamilies, ctx)
    // 获取me共同成员的差集
    const myDifferentFamilies = getDifferentFamilies(myCommonFamilies, myIntersectionFamilies)
    // 获取relative共同成员的差集
    const relativeDifferentFamilies = getDifferentFamilies(relativeCommonFamilies, relativeIntersectionFamilies)
    console.log('start1')
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
          pubsub.publish(FAMILY_CHANGED, { [FAMILY_CHANGED]: {"text":relative.id}  })
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
          pubsub.publish(FAMILY_CHANGED, { [FAMILY_CHANGED]: user.id })
        }
      }
    }
    console.log('start2')

    // 第二部分：遍历relative共同成员差集
    for (const relativeCommonFamily of relativeDifferentFamilies) {
      const relativeCommonFamilyTo = await ctx.db.family({ id: relativeCommonFamily.id }).to()
      const isHusbandOrWife = ~["husband", "wife"].indexOf(myUpdateFamily.relationshp)
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
      pubsub.publish(FAMILY_CHANGED, { [FAMILY_CHANGED]: {"text":user.id} })
    }

    console.log('start3')
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
      const isHusbandOrWife = ~["husband", "wife"].indexOf(relativeFamily[0].relationshp)
      // 如果是自己的话，不要增加
      if (myCommonFamilyTo.name !== relative.name ) {
        // 如果relative和me是夫妻的话，则spouse直接为relativeFamily。
        if (isHusbandOrWife) {
          await ctx.db.createFamily({
            from: { connect: { id: relative.id } },
            status: myCommonFamily.status,
            to: { where: { id: myCommonFamilyTo.id } },
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
      pubsub.publish(FAMILY_CHANGED, { [FAMILY_CHANGED]: {"text":relative.id} })
    }

    return myUpdateFamily
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
