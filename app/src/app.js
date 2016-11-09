const Koa       = require('koa'),
      Router    = require('koa-router'),
      views     = require('koa-views'),
      dbHelpers = require('./helpers/db-helpers');

const app    = new Koa(),
      router = new Router();

app.use(views(`${__dirname}/views`), {map: {pug: 'pug'}});

router
  .get('/', async function getMainPage(ctx, next) {
    ctx.body = 'Hello world, this is front-page!';
  })
  .get('/pug', async function getPugPage(ctx, next) {
    await ctx.render('example.pug', {name: 'Skilta'});
  });

app.use(router.routes());

async function startServer() {
  let db = await dbHelpers.establishDBConnection();
  app.listen(3000);
  console.log("Server is listening to port 3000");
}

startServer();
