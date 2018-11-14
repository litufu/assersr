import { hash, compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { APP_SECRET, getUserId } from '../services/utils'
import uuidv4 from 'uuid/v4'

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
    console.log(uid)
    const token = sign({ userId: uid }, APP_SECRET)
    console.log(token)
    try{
      const user = await ctx.db.createUser({
        username:username,
        password: hashedPassword,
        uid:uid,
        token:token,
      })
      return user
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

    return user
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
          uid:uid,
          token:sign({ userId: uid }, APP_SECRET)
        },
        where: {
          uid: userId
        }
      })

    return updateUser


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
