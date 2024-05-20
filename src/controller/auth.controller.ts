import { Context } from 'koa'
import jwt from 'jsonwebtoken'
import { PRIVATE_KEY } from '@/config/secret'

class AuthController {
  async login(ctx: Context) {
    const { id, login_name, role_id } = ctx.user

    const token = jwt.sign({ id, login_name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: 'RS256',
    })

    ctx.body = {
      code: 200,
      data: { id, name: login_name, role_id, token },
      msg: '登录成功',
    }
  }

  async success(ctx: Context) {
    const user = ctx.user
    ctx.body = {
      code: 200,
      data: user,
      msg: '授权成功',
    }
  }
}

export default new AuthController()
