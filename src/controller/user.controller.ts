import { Context } from 'koa'

import userService from '@/service/user.service'
import { ERROR_TYPES } from '@/constant'

class UserController {
  async register(ctx: Context) {
    const { name, password } = ctx.request.body
    const result = await userService.registerUser({ name, password })
    ctx.body = {
      code: 200,
      data: result.login_name,
      msg: '注册成功',
    }
  }

  async userInfo(ctx: Context) {
    const { userId } = ctx.params
    const result = await userService.getUserInfoById(userId)
    if (!result) {
      const error = new Error(ERROR_TYPES.USER_NOT_EXISTS)
      return ctx.app.emit('error', error, ctx)
    }
    ctx.body = {
      code: 200,
      data: result,
      msg: '获取成功',
    }
  }
}

export default new UserController()
