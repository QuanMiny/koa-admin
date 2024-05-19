import { Context } from 'koa'

import userService from '@/service/user.service'

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
}

export default new UserController()
