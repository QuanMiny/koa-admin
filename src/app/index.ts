import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import { loadAllRoutes } from '@/router'
import { errorHandler } from './error-handler'

const app = new Koa()

// ctx.body
app.use(bodyParser())

// errorHandler
app.on('error', errorHandler)

// 导入路由
loadAllRoutes(app)

export default app
