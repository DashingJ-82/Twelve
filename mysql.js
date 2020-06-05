//主要用koa-router实现
const Koa = require('koa');
const Router = require('koa-router');
const mysql = require('mysql');
const DB = require('./mysqlDB'); //封装好的引入mysql方法

const app = new Koa();
const router = new Router();
router.get('/js17080103', async (ctx, next) => {
    const result = await DB.query('select * from dingjian'); //查询数据库
    console.log(result);
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000'); //配置跨域资源共享
    ctx.set('Access-Control-Allow-Credentials', 'true');
    ctx.body = result;
  
})

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3001, () => {
  console.log('starting ar port 3001');
});