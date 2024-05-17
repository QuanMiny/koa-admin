import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

// const errorHandler = require('./error-handle')

const app = new Koa()

// ctx.body
app.use(bodyParser())

// app.on('error', errorHandler)

export default app
