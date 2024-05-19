import { Context, Next } from 'koa'

import userService from '@/service/user.service'
import { ERROR_TYPES } from '@/constant'
import PasswordToHash from '@/utils/password-handle'

const verifyUser = async (ctx: Context, next: Next) => {
  // 1.获取用户名和密码
  const { name, password } = ctx.request.body

  // 2.判断用户名或者密码不能为空
  if (!name || !password) {
    const error = new Error(ERROR_TYPES.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  // 3.判断用户名不能重复
  const old_user = await userService.getUserByName(name)
  if (old_user) {
    const error = new Error(ERROR_TYPES.USER_ALREADY_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  await next()
}

const handlePassword = async (ctx: Context, next: Next) => {
  const { password } = ctx.request.body
  ctx.request.body.password = PasswordToHash(password)

  await next()
}

export { verifyUser, handlePassword }
