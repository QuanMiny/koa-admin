import Router from 'koa-router'

import authController from '@/controller/auth.controller'

import { verifyLogin } from '@/middleware/auth.middleware'

const authRouter = new Router()

// 用户登录
authRouter.post('/login', verifyLogin, authController.login)

export default authRouter
