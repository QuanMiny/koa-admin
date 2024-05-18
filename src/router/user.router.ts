import Router from 'koa-router'

import userController from '@/controller/user.controller'

import { verifyUser } from '@/middleware/user.middleware'

const userRouter = new Router({ prefix: '/user' })

// 用户注册
userRouter.post('/', verifyUser, userController.register)

export default userRouter
