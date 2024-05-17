import app from './app'
import 'module-alias/register' // 路径别名 @

import { connectMysql } from '@/config/mysql'
import { PROJECT_PORT } from '@/constant'
import { loadAllRoutes } from '@/router'
async function runServer() {
  const port = +PROJECT_PORT // 端口
  try {
    await Promise.all([
      connectMysql(), // 连接mysql
      // connectRedis(), // 连接redis
    ])

    // 导入路由
    loadAllRoutes(app)

    await new Promise((resolve) => {
      app.listen(port, () => {
        console.log(`服务器在${PROJECT_PORT}端口启动成功！`)
        resolve('ok')
      })
    })
  } catch (error) {
    console.log(`项目启动失败！`)
    console.log(error)
  }
}

runServer()
