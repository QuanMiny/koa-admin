import Router from 'koa-router'

import userController from '@/controller/user.controller'

const userRouter = new Router({ prefix: '/user' })

// 账号密码登录
userRouter.get('/:userId', userController.index)

export default userRouter
