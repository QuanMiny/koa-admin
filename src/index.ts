import Koa from 'koa';
import 'module-alias/register'; // 路径别名 @

import { connectMysql } from '@/config/mysql';
import { PROJECT_PORT } from '@/constant';
import { loadAllRoutes } from '@/router';

function runServer() {
  const port = +PROJECT_PORT; // 端口
  const app = new Koa();

  async function main() {
    try {
      await Promise.all([
        connectMysql(), // 连接mysql
        // connectRedis(), // 连接redis
        // createPubSub(), // 创建redis的发布订阅
      ]);
      require('@/model');
      loadAllRoutes(app); // 加载所有路由
      await new Promise((resolve) => {
        app.listen(port, () => {
          resolve('ok');
        });
      });
    } catch (error) {
      console.log(`项目启动失败！`);
      console.log(error);
    }
  }

  main();
}

runServer();
