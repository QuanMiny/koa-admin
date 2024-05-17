import { Context } from 'koa';

import UserService from '@/service/user.service';

class UserController {
  async index(ctx: Context) {
    const { userId } = ctx.params;
    const result = await UserService.getUserById(userId);
    ctx.body = result;
  }
}

export default new UserController();
