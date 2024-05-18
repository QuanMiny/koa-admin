import { Context, Next } from 'koa'

import userService from '@/service/user.service'
import { ERROR_TYPES } from '@/constant'

const verifyLogin = async (ctx: Context, next: Next) => {
  const { name } = ctx.request.body
  const user = await userService.getUserByName(name)
  if (!user) {
    const error = new Error(ERROR_TYPES.USER_NOT_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }
  await next()
}

export { verifyLogin }
