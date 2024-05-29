import { Context } from 'koa'
import jwt from 'jsonwebtoken'
import { PRIVATE_KEY } from '@/config'

class AuthController {
  async login(ctx: Context) {
    const { id, login_name, role_id } = ctx.user

    const { rememberMe } = ctx.request.body
    // token 有效期
    const expires = rememberMe ? '7d' : '24h'

    const token = jwt.sign({ id, login_name }, PRIVATE_KEY, {
      expiresIn: expires,
      algorithm: 'RS256',
    })

    ctx.body = {
      code: 200,
      data: { id, username: login_name, role_id, token },
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
