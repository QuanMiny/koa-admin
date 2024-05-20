export enum PROJECT_ENV_ENUM {
  development = 'development',
  prod = 'prod',
  beta = 'beta',
}

export const PROJECT_NAME = process.env.NODE_APP_RELEASE_PROJECT_NAME as string
export const PROJECT_ENV = process.env
  .NODE_APP_RELEASE_PROJECT_ENV as PROJECT_ENV_ENUM
export const PROJECT_PORT = process.env.NODE_APP_RELEASE_PROJECT_PORT as string
export const PROJECT_NODE_ENV = process.env.NODE_ENV as string

export enum ERROR_TYPES {
  NAME_OR_PASSWORD_IS_REQUIRED = '用户名或者密码不能为空',
  USER_ALREADY_EXISTS = '用户名已经存在',
  USER_NOT_EXISTS = '用户不存在',
  PASSWORD_IS_INCORRECT = '密码不正确',
  UNAUTHORIZATION = '无效的token',
  UNPERMISSION = '没有权限',
  MENU_NOT_EXISTS = '菜单不存在',
}
