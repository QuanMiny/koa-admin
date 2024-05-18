import { Context } from 'koa'

class AuthController {
  async login(ctx: Context) {
    ctx.body = {
      code: 200,
      data: { token: 'token' },
      msg: '登录成功~',
    }
  }
}

export default new AuthController()
