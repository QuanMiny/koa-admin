import 'module-alias/register' // 路径别名 @
import dotenv from 'dotenv'
dotenv.config()

import app from './app'

import { connectMysql } from '@/config/mysql'
import { APP_HOST, APP_PORT } from '@/config'

async function runServer() {
  const port = APP_PORT // 端口
  try {
    await Promise.all([
      connectMysql(), // 连接mysql
      // connectRedis(), // 连接redis
    ])

    await new Promise((resolve) => {
      app.listen(port, () => {
        console.log(`服务器在${APP_HOST}:${APP_PORT}端口启动成功！`)
        resolve('ok')
      })
    })
  } catch (error) {
    console.log(`项目启动失败！`)
    console.log(error)
  }
}

runServer()
