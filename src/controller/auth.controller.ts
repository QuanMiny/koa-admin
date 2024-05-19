import { Context } from 'koa'
import jwt from 'jsonwebtoken'
import { PRIVATE_KEY } from '@/config/secret'

class AuthController {
  async login(ctx: Context) {
    const { id, login_name } = ctx.user

    const token = jwt.sign({ id, login_name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: 'RS256',
    })

    ctx.body = {
      code: 200,
      data: { id, name: login_name, token },
      msg: '登录成功',
    }
  }

  async success(ctx: Context) {
    ctx.body = {
      code: 200,
      data: null,
      msg: '授权成功',
    }
  }
}

export default new AuthController()
