import { Context } from 'koa'

class UserController {
  async register(ctx: Context) {
    ctx.body = {
      code: 200,
      data: null,
      msg: '注册成功~',
    }
  }
}

export default new UserController()
