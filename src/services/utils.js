const { verify } = require('jsonwebtoken')

const APP_SECRET = 'appsecret321'

class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

function getUserId(context) {
  const Authorization = (context.req.headers && context.req.headers.authorization) || '';
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET)
    return verifiedToken && verifiedToken.userId
  }
}

async function getUser(req,prisma) {
  const Authorization = (req.headers && req.headers.authorization) || '';
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET)
    const uid = verifiedToken.userId
    const user = await prisma.user({uid})
    return user
  }
  return null
}

module.exports = {
  getUserId,
  APP_SECRET,
  getUser,
}
