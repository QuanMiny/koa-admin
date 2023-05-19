import { Context } from 'koa';

class UserController {
  index(ctx: Context) {
    ctx.body = ['1', '2'];
  }
}

export default new UserController();
