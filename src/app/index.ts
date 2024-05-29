import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import { loadAllRoutes } from '@/router'
import { errorHandler } from './error-handler'
import Cors from 'koa2-cors'
import { corsHandler } from './cors'

const app = new Koa()

// ctx.body
app.use(bodyParser())

app.use(Cors(corsHandler))

// errorHandler
app.on('error', errorHandler)

// 导入路由
loadAllRoutes(app)

export default app
