const Router = require('koa-router')
const router = new Router();

router.all('/', ctx => {
  ctx.body = 'hello world'
})
router.all('/add', ctx => {
  // 获取get请求参数
  const username = ctx.query.username;
  const phone = ctx.query.phone;
  // 把拿到的数据放入ctx.body
  ctx.body = {
    module: 'add',
    username,
    phone
  }
})
router.all('/getList', ctx => {
  ctx.body = 'demo1'
})
router.all('/del', ctx => {
  ctx.body = 'del'
})
router.all('/edit', ctx => {
  ctx.body = 'edit'
})

module.exports = router;