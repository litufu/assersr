const { verify } = require('jsonwebtoken')

const APP_SECRET = 'appsecret321'

class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

function getUserId(context) {
  console.log(context.req.headers.authorization)
  const Authorization = (context.req.headers && context.req.headers.authorization) || '';
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    console.log(token);
    const verifiedToken = verify(token, APP_SECRET)
    console.log(verifiedToken);
    return verifiedToken && verifiedToken.userId
  }
}

module.exports = {
  getUserId,
  APP_SECRET,
}
