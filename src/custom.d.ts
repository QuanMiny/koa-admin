import { Context } from 'koa'

declare module 'koa' {
  interface CustomContext extends Context {
    request: {
      body?: any // 类型扩展声明
    }
  }
}
