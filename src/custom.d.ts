import { Context } from 'koa'

declare module 'koa' {
  interface Context {
    request: Context.Request & {
      body?: any // 类型声明扩展
    }
  }
}
