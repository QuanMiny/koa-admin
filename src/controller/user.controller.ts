import { Context } from 'koa'

import UserService from '@/service/user.service'

class UserController {
  async index(ctx: Context) {
    const { userId } = ctx.params
    const result = await UserService.getUserById(userId)
    // ctx.body = {
    //   code: 200,
    //   msg: '查询用户列表成功',
    //   data: result,
    // }
    const error = new Error('hhhh')
    ctx.app.emit('error', error, ctx)
  }
}

export default new UserController()
