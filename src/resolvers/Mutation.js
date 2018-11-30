import { hash, compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import uuidv4 from 'uuid/v4'

import { APP_SECRET, getUserId } from '../services/utils'
import getBasicInfoData from '../services/displayBasicInfoData'
import validateBasicInfo from '../validate/basickInfo'
import relationshipMap from '../services/relationshipMap'

export const Mutation = {
  signup: async (parent, { username, password }, ctx) => {
    if(username){
      const uPattern = /^[a-zA-Z0-9_-]{4,16}$/
      const usernameTest = uPattern.test(username)
      if (!usernameTest) throw new Error(`${username}格式不符合要求`)
    }

    if(password){
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
    try{
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
    }catch(error){
      console.log(error.message)
    }
  },
  login: async (parent, { username, password }, ctx) => {
    if(username){
      const uPattern = /^[a-zA-Z0-9_-]{4,16}$/
      const usernameTest = uPattern.test(username)
      if (!usernameTest) throw new Error(`${username}格式不符合要求`)
    }

    if(password){
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

    return  {
      token:user.token,
      user
    }
  },
  changePassword:async (parent, { currentPassword,newPassword }, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid:userId })
    if (!user) {
      throw new Error("用户不存在")
    }

    if(currentPassword && newPassword){
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
          password:hashedNewPassword,
          uid,
          token:sign({ userId: uid }, APP_SECRET)
        },
        where: {
          uid: userId
        }
      })

    return updateUser


  },

  addBasicInfo:async (parent, { name,gender,birthday,birthplace }, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    // 对用户输入的数据进行验证。
    validateBasicInfo(name,gender,birthday,birthplace)
    // 获取要输入的数据。
    const data = getBasicInfoData(name,gender,birthday,birthplace)

    return ctx.db.updateUser({
      where: { uid: userId },
      data
    })
  },

  updatePerson:async (parent, { id,username }, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const updatePerson = await ctx.db.updatePerson({
      where: { id },
      data:{user:{connect:{username}}},
    })
    return updatePerson
  },

  createFamily:async (parent, { name,relationship }, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const family = await ctx.db.createFamily({
        relationship,
        status:'0',
        from:{connect:{uid:userId}},
        to:{create:{name}},
    })
    return family
  },

  updateFamily:async (parent, { id, name,relationship,status="0" }, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const updateFamily = await ctx.db.updateFamily({
      where:{ id },
      data:{
        to:{update:{name}},
        relationship,
        status
      },
    })
    return updateFamily
  },

  deleteFamily: async (parent, { familyId,toId }, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const deleteFamily = await ctx.db.deleteFamily({ id:familyId })
    const deletePerson = await  ctx.db.deletePerson({ id:toId })

    return deleteFamily
  },

  connectFamily:async (parent, { id, name,relationship }, ctx) => {
    // id:亲属的id
    // name:亲属的姓名
    // relationship:和亲属的关系
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    // 用户自己
    const user = await ctx.db.user({uid:userId})
    // 亲人
    const relative = await ctx.db.user({id})
    if(relative.name!==name){
      throw new Error("对方姓名与你拟添加的家庭成员姓名不一致")
    }
    // 亲人的家庭成员列表
    const families = await ctx.db.families({where:{from:{id}}})
    // 检查拟建立关系的亲人家庭成员中是否添加了与用户相同的名字和对应的关系。
    if(families.length===0){
      throw new Error("对方家庭成员中未找到你的名字")
    }
    let personId
    let familyId 
    for (const family of families){
      // 获取亲人家庭成员的个人信息
      const persons = await ctx.db.persons({where:{families_every:{id:family.id}}})
      if(persons[0].name===user.name && relationshipMap[relationship].indexOf(family.relationship)>-1){
        personId=persons[0].id
        familyId = family.id
      }
    }

    if(!personId){
      throw new Error("对方家庭成员中未包含你的名字或关系不正确")
    }

    return families
  },


  createDraft: async (parent, { title, content, authorEmail }, ctx) => {
    return ctx.db.createPost({
      title,
      content,
      author: { connect: { email: authorEmail } },
    })
  },

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

  publish: async (parent, { id }, ctx) => {
    return ctx.db.updatePost({
      where: { id },
      data: { isPublished: true },
    })
  },
}
