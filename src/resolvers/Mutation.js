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
import validateBasicInfo from '../validate/basickInfo'
import { 
  relationshipMap,
  relationIntersectionNew,
  relationshipGenderMap,
  relationshipTOGender,
} from "../services/relationship"
import { FAMILY_CONNECTED } from './Subscription'
import { pubsub } from '../subscriptions';

export const Mutation = {
  signup: async (parent, { username, password }, ctx) => {
    if (username) {
      const uPattern = /^[a-zA-Z0-9_-]{4,16}$/
      const usernameTest = uPattern.test(username)
      if (!usernameTest) throw new Error(`${username}格式不符合要求`)
    }

    if (password) {
      const pPattern = /^.*(?=.{6,20})(?=.*\d)(?=.*[a-zA-Z]).*$/;
      const passwordTest = pPattern.test(password)
      if (!passwordTest) throw new Error(`${password}格式不符合要求`)
    }

    const hasuser = await ctx.db.user({ username })

    if (hasuser) {
      throw new Error(`${username}已经被占用`)
    }

    const hashedPassword = await hash(password, 10)
    const uid = uuidv4()
    const token = sign({ userId: uid }, APP_SECRET)
    try {
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
    } catch (error) {
      console.log(error.message)
    }
  },
  login: async (parent, { username, password }, ctx) => {
    if (username) {
      const uPattern = /^[a-zA-Z0-9_-]{4,16}$/
      const usernameTest = uPattern.test(username)
      if (!usernameTest) throw new Error(`${username}格式不符合要求`)
    }

    if (password) {
      const pPattern = /^.*(?=.{6,20})(?=.*\d)(?=.*[a-zA-Z]).*$/;
      const passwordTest = pPattern.test(password)
      if (!passwordTest) throw new Error(`${password}格式不符合要求`)
    }

    const user = await ctx.db.user({ username })

    if (!user) {
      throw new Error(`用户不存在: ${username}`)
    }

    const valid = await compare(password, user.password)

    if (!valid) {
      throw new Error('密码错误')
    }

    return {
      token: user.token,
      user
    }
  },
  changePassword: async (parent, { currentPassword, newPassword }, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }

    if (currentPassword && newPassword) {
      const pPattern = /^.*(?=.{6,20})(?=.*\d)(?=.*[a-zA-Z]).*$/;
      const curPasswordTest = pPattern.test(currentPassword)
      const newPasswordTest = pPattern.test(newPassword)
      if (!curPasswordTest) throw new Error("原始密码错误")
      if (!newPasswordTest) throw new Error('新密码格式不符合要求')
    }

    const valid = await compare(currentPassword, user.password)
    if (!valid) {
      throw new Error('原始密码错误')
    }

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
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    // 对用户输入的数据进行验证。
    validateBasicInfo(name, gender, birthday, birthplace)
    // 获取要输入的数据。
    const data = getBasicInfoData(name, gender, birthday, birthplace)

    return ctx.db.updateUser({
      where: { uid: userId },
      data
    })
  },

  updatePerson: async (parent, { id, username }, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const updatePerson = await ctx.db.updatePerson({
      where: { id },
      data: { user: { connect: { username } } },
    })
    return updatePerson
  },

  createFamily: async (parent, { name, relationship, spouseId }, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({uid:userId})
    
    // 自己创建

    let family
    if (spouseId) {
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
    // 同步所有有连接的人，即status大于0的人、无需同步尚未连接的人。
    // const myLinkFamilies = await ctx.db.user({uid:userId}).families({where:{status:"3"}})
    // console.log(myLinkFamilies)
    // const person = await ctx.db.family({id:family.id}).to()
    // console.log(person)
    // // 判断我与myLinkFamily的commonFamilies
    // const commonFamilies = getCommonFamilies(relationshipGenderMap[user.gender][relationship], myLinkFamilies,"0")
    // console.log(commonFamilies)
    // for (const commonFamily of commonFamilies){
    //   const commonUser = await ctx.db.family({ id: commonFamily.id }).to().user()
    //   console.log(commonUser)
    //   const computeRelationship = relationIntersectionNew[relationshipGenderMap[user.gender][relationship]][commonFamily.relationship]
    //   console.log(computeRelationship)
    //   const isHusbandOrWife = ~["husband", "wife"].indexOf(relationship)
    //   console.log(isHusbandOrWife)
    //     // 如果relative和me是夫妻的话，则spouse直接为relativeFamily。
    //   if(isHusbandOrWife){
    //     const update11 = await ctx.db.createFamily({
    //       from: { connect: { id: commonUser.id } },
    //       to: { connect: { id: person.id } },
    //       status: '0',
    //       spouse: { connect: { id: family.id } },
    //       relationship:computeRelationship
    //     })
    //     console.log('update11',update11)
    //   }else{
    //     // 如果relative和me是不是夫妻的话，则spouse为relativeFamily的spouse,因为剩下的肯定是子女或兄弟姐妹关系，
    //     // 兄弟姐妹的话spouse为null,子女的话spouse也是对应的spouse。
    //     const relativeSpouse = await ctx.db.family({id:family.id}).spouse()
    //     console.log(relativeSpouse)
    //     const update12 = await ctx.db.createFamily({
    //       from: { connect: { id: commonUser.id } },
    //       to: { connect: { id: person.id } },
    //       status: '0',
    //       spouse:relativeSpouse ? {connect:{id:relativeSpouse.id}} : null,
    //       relationship:computeRelationship
    //     })
    //     console.log('update12',update12)
    //   }
    // }

    return family
  },

  updateFamily: async (parent, { id, name, relationship, spouseId, status = "0" }, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    let updateFamily
    if (spouseId) {
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
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const deleteFamily = await ctx.db.deleteFamily({ id: familyId })
    const deletePerson = await ctx.db.deletePerson({ id: toId })

    return deleteFamily
  },

  connectFamily: async (parent, { relativeId, familyId, name, relationship }, ctx) => {
    // relativeId:亲属的user id
    // familyId:自己建立亲属的id
    // name:亲属的姓名
    // relationship:和亲属的关系
    console.log(relativeId)
    console.log(familyId)
    console.log(name)
    console.log(relationship)
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    console.log(userId)
    // 用户自己
    const user = await ctx.db.user({ uid: userId })
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
    console.log('families',families)
    // 检查拟建立关系的亲人家庭成员中是否添加了与user相同的名字和对应的关系。
    if (families.length === 0) {
      throw new Error("对方家庭成员中未找到你的名字")
    }
    let personId
    let relativeFamilyId
    for (const family of families) {
      // 获取亲人家庭成员的个人信息
      const persons = await ctx.db.persons({ where: { families_some: { id: family.id } } })
      console.log('persons',persons)
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
    console.log(persons1)
    // 0:连接，1:等待验证 2:确认 3:已连接
    // 更新亲人连接状态为“确认”,更新to中的user
    let updateRelativeFamily
    if (persons1.length === 0) {
      updateRelativeFamily = await ctx.db
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
      updateRelativeFamily = await ctx.db
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
    console.log(updateRelativeFamily)

    // 此处发送订阅
    pubsub.publish(FAMILY_CONNECTED, { [FAMILY_CONNECTED]: updateRelativeFamily });

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

    console.log(updateFamily)

    return updateFamily
  },

  confirmFamily: async (parent, { familyId }, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })

    // 更新user family status
    const myUpdateFamily = await ctx.db.updateFamily({
      where: { id: familyId },
      data: { status: "3" }
    })
    // 获取relative famliy
    // 获取relative
    const relative = await ctx.db.updateFamily({
      where: { id: familyId },
      data: { status: "3" }
    }).to().user()
    // 获取relative Family
    const relativeFamily = await ctx.db.user({ id: relative.id }).families({ where: { to: { user: { uid: userId } } } })
    console.log('relativeFamily',relativeFamily)
    // 更新relative family  status
    const updateRelativeFamily = await ctx.db.updateFamily({
      where: { id: relativeFamily[0].id },
      data: { status: "3" }
    })

    

    // 删除多余的person 见deletePersons
    // 没有必要每个删除，可以定时的删除所有family为[],并且user 为null的person.

    // 合并相同的亲人
    // 我的家庭成员==》我的共同家庭成员==》使用我的共同家庭成员同步relative的family，同时更新共同家庭成员family
    // rel的家庭成员==》rel的共同家庭成员==》使用rel的共同家庭成员同步我的family，同时更新共同家庭成员family
  
    const myRelationship = myUpdateFamily.relationship
    const relativeRelationship = relativeFamily[0].relationship
    const myFamilies = await ctx.db.user({ uid: userId }).families()
    const relativeFamilies = await ctx.db.user({ id: relative.id }).families()

    console.log("myFamilies",myFamilies)
    console.log("relativeFamilies",relativeFamilies)
  

    const myCommonFamilies = getCommonFamilies(relativeRelationship, myFamilies,myUpdateFamily.id)
    const relativeCommonFamilies = getCommonFamilies(myRelationship, relativeFamilies,relativeFamily[0].id)
    console.log("myCommonFamilies",myCommonFamilies)
    console.log("relativeCommonFamilies",relativeCommonFamilies)

    // 获取共同家庭成员的交集
    const {myIntersectionFamilies,relativeIntersectionFamilies} = await getIntersectionFamiles(myCommonFamilies,relativeCommonFamilies,ctx)
    console.log("myIntersectionFamilies",myIntersectionFamilies)
    console.log("relativeIntersectionFamilies",relativeIntersectionFamilies)
    // 获取me共同成员的差集
    const myDifferentFamilies = getDifferentFamilies(myCommonFamilies,myIntersectionFamilies)
    console.log("myDifferentFamilies",myDifferentFamilies)
    // 获取relative共同成员的差集
    const relativeDifferentFamilies = getDifferentFamilies(relativeCommonFamilies,relativeIntersectionFamilies)
    console.log("relativeDifferentFamilies",relativeDifferentFamilies)

    // 遍历共同的家庭成员交集，用status大的一方更新小的一方。
    for (const myCommonFamily of myIntersectionFamilies) {
      console.log('start')
      const myCommonFamilyTo = await ctx.db.family({ id: myCommonFamily.id }).to()
      console.log('myCommonFamilyTo',myCommonFamilyTo)
      const relativeToCommonUserFamily = await ctx.db.user({ id: relative.id }).families(
        { where: { to: { name: myCommonFamilyTo.name } } }
      )
      console.log('relativeToCommonUserFamily',relativeToCommonUserFamily)
      const relativeToCommonUserFamilyTo = await ctx.db.family({ id: relativeToCommonUserFamily[0].id }).to()
      console.log('relativeToCommonUserFamily',relativeToCommonUserFamilyTo)
      if(myCommonFamilyTo.id !== relativeToCommonUserFamilyTo.id || 
        myCommonFamily.status !== relativeToCommonUserFamily[0].status
        ){
        console.log(relativeToCommonUserFamily)
        if (myCommonFamily.status >= relativeToCommonUserFamily[0].status) {
          // 如果我的家庭成员status大于relative的status,则更新relative的family
          // 更新relative的family
          console.log('4')
          const update1 = await ctx.db.updateFamily({
            where: { id: relativeToCommonUserFamily[0].id },
            data: {
              status: myCommonFamily.status,
              to: { connect: { id: myCommonFamilyTo.id } }
            }
          })
          console.log(update1)
          if (myCommonFamily.status > "0") {
            // 如果等于0,则还没有共同的user,无需更新,如果大于0，则要更新CommonUser
            console.log('2')
            await updateCommonUserFamily(user,myRelationship,myCommonFamily, relative,relativeRelationship, ctx)
          }
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
            await updateCommonUserFamily(relative,relativeRelationship,relativeToCommonUserFamily[0], user,myRelationship, ctx)
          }
        }
      }
    }


    // 遍历me共同成员的差集
    for(const myCommonFamily of myDifferentFamilies){
      console.log('myCommonFamily01',myCommonFamily)
      const myCommonFamilyTo = await ctx.db.family({ id: myCommonFamily.id }).to()
      console.log('myCommonFamilyTo',myCommonFamilyTo)
      let relRelationship = (relationshipGenderMap[relationshipTOGender[myCommonFamily.relationship]]
        [relationIntersectionNew[relationshipGenderMap[user.gender][myCommonFamily.relationship]][myUpdateFamily.relationship]
      ])
      const myCommonFamilyToUser = await ctx.db.family({ id: myCommonFamily.id }).to().user()
      if(myCommonFamilyToUser){
        if(relRelationship==="sister"){
          if(Date.parse(myCommonFamilyToUser.birthday)>Date.parse(relative.birthday)){
            relRelationship="youngsister"
          }else{
            relRelationship="oldsister"
          }
        }else if(relRelationship==="brother"){
          if(Date.parse(myCommonFamilyToUser.birthday)>Date.parse(relative.birthday)){
            relRelationship="youngbrother"
          }else{
            relRelationship="oldbrother"
          }
        }
      }
      console.log('relRelationship',relRelationship)
      const isHusbandOrWife = ~["husband", "wife"].indexOf(relativeFamily[0].relationshp)
      console.log('isHusbandOrWife',isHusbandOrWife)
      // 如果是自己的话，不要增加
      if(myCommonFamilyTo.name !== relative.name){
        // 如果relative和me是夫妻的话，则spouse直接为relativeFamily。
        if(isHusbandOrWife){
          const update6 = await ctx.db.createFamily({
            from:{connect:{id:relative.id}},
            status: myCommonFamily.status,
            to: { where: { id: myCommonFamilyTo.id } },
            spouse:{connect:{id:relativeFamily[0].id}},
            relationship:relRelationship
          })
          console.log('update6',update6)
        }else{
          // 如果relative和me是不是夫妻的话，则spouse为relativeFamily的spouse,因为剩下的肯定是子女或兄弟姐妹关系，
          // 兄弟姐妹的话spouse为null,子女的话spouse也是对应的spouse。
          console.log(relativeFamily[0].id)
          const relativeSpouse = await ctx.db.family({id:relativeFamily[0].id}).spouse()
          console.log("relativeSpouse",relativeSpouse)
          console.log("relative.id",relative.id)
          console.log("myCommonFamily.status",myCommonFamily.status)
          console.log('myCommonFamilyToId',myCommonFamilyTo.id)
          const update7 = await ctx.db.createFamily({
            from:{connect:{id:relative.id}},
            status: myCommonFamily.status,
            to: { connect: { id: myCommonFamilyTo.id } },
            spouse:relativeSpouse ? {connect:{id:relativeSpouse.id}} : null,
            relationship:relRelationship
          })
          console.log('update7',update7)
        }
      }
      if (myCommonFamily.status > "0") {
        // 如果等于0,则还没有共同的user,无需更新,如果大于0，则要更新CommonUser
        await updateCommonUserFamily(user,myRelationship,myCommonFamily, relative,relativeRelationship, ctx)
      }
    }
    // 遍历relative共同成员差集
    for(const relativeCommonFamily of relativeDifferentFamilies){
      const relativeCommonFamilyTo = await ctx.db.family({ id: relativeCommonFamily.id }).to()
      const isHusbandOrWife = ~["husband", "wife"].indexOf(myUpdateFamily.relationshp)
      // 如果是自己的话，不要增加
      
      const meRelationship = (relationshipGenderMap[relationshipTOGender[relativeCommonFamily.relationship]]
        [relationIntersectionNew[relationshipGenderMap[relative.gender][relativeCommonFamily.relationship]][relativeFamily[0].relationship]]
      )
      if(relativeCommonFamilyTo.name !== user.name){
        if(isHusbandOrWife){
          const update8 = await ctx.db.createFamily({
            from:{connect:{id:user.id}},
            status: relativeCommonFamily.status,
            to: { connect: { id: relativeCommonFamilyTo.id } },
            spouse:{connect:{id:myUpdateFamily.id}},
            relationship:meRelationship
          })
          console.log(update8)
        }else{
          const mySpouse = await ctx.db.family({id:myUpdateFamily.id}).spouse()
          const update9 = await ctx.db.createFamily({
            from:{connect:{id:user.id}},
            status: relativeCommonFamily.status,
            to: { connect: { id: relativeCommonFamilyTo.id } },
            spouse:mySpouse ? {connect:{id:mySpouse.id}} : null,
            relationship:meRelationship
          })
          console.log(update9)
        }
      }
      if (relativeCommonFamily.status > "0") {
        // 如果等于0,则还没有共同的user,无需更新,如果大于0，则要更新CommonUser
        await updateCommonUserFamily(relative,relativeRelationship,relativeCommonFamily, user,myRelationship, ctx)
      }
    }

    console.log('over')
    // 此处发送订阅
    pubsub.publish(FAMILY_CONNECTED, { [FAMILY_CONNECTED]: updateRelativeFamily });
    return myUpdateFamily

  },

deletePersons: async (parent, args, ctx) => (
  // 删除所有没有家人的person
  ctx.db.deleteManyPersons({ where: { families_every: { id: "" } } })
),


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
