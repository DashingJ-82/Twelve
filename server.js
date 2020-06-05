const Koa = require('koa')
const app = new Koa()
const router = require('./router');

app.use(router.routes());

app.listen(3000, () => {
  console.log('服务已启动，在 http://localhost:3000/');
});

const serv = require('koa-static');
app.use(serv(__dirname + '/static'));