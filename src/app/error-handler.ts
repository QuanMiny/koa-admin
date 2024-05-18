// import { logger } from './logger'
import { ParameterizedContext } from 'koa'
import { ERROR_TYPES } from '@/constant'

export const errorHandler = (error, ctx: ParameterizedContext) => {
  let status: number, msg: string

  switch (error.message) {
    case ERROR_TYPES.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400 // Bad Request
      msg = ERROR_TYPES.NAME_OR_PASSWORD_IS_REQUIRED
      break
    case ERROR_TYPES.USER_ALREADY_EXISTS:
      status = 409 // Conflict
      msg = ERROR_TYPES.USER_ALREADY_EXISTS
      break
    case ERROR_TYPES.USER_NOT_EXISTS:
      status = 400 // Wrong
      msg = ERROR_TYPES.USER_NOT_EXISTS
      break
    case ERROR_TYPES.PASSWORD_IS_INCORRECT:
      status = 400 // Wrong
      msg = ERROR_TYPES.PASSWORD_IS_INCORRECT
      break
    case ERROR_TYPES.UNAUTHORIZATION:
      status = 401 // Authorization
      msg = ERROR_TYPES.UNAUTHORIZATION
      break
    case ERROR_TYPES.UNPERMISSION:
      status = 401 // Permission
      msg = ERROR_TYPES.UNPERMISSION
      break
    default:
      status = 404
      msg = error.message // 默认返回的错误信息
  }
  ctx.body = {
    code: status || -1,
    data: null,
    msg: msg || '失败',
  }

  // 保证返回状态是 200, 这样前端不会抛出异常
  ctx.status = 200
}
