import fs from 'fs'
import path from 'path'
import Router from 'koa-router'
import { APP_HOST, APP_PORT } from '@/config'

const router = new Router()
export function loadAllRoutes(app) {
  router.get('/', async (ctx, next) => {
    ctx.body = {
      message: `欢迎访问${APP_HOST}:${APP_PORT},当前时间:${new Date().toLocaleString()}`,
    }
    await next()
  })
  app.use(router.routes()).use(router.allowedMethods()) // 每一个router都要配置routes()和allowedMethods()

  const files = fs.readdirSync(__dirname) // 获取当前目录下的所有文件
  files.forEach(async (file) => {
    try {
      const allRouter = await importFile(file)
      if (allRouter) {
        // 在这里处理每个路由
        app.use(allRouter.routes()).use(allRouter.allowedMethods()) // allRouter也要配置routes()和allowedMethods()
        console.log(`加载路由: ${file}`)
      }
    } catch (error) {
      console.error(`加载路由: ${file}出错`, error)
    }
  })
  console.log('加载所有路由完成~')
}

async function importFile(file) {
  try {
    const importedModule = await import(path.join(__dirname, file))
    return importedModule.default // 读取默认导出文件
  } catch (error) {
    console.error(`Error importing ${file}:`, error)
    return null
  }
}
