const koa       = require('koa'),
      dbHelpers = require('./helpers/db-helpers');

const app = new koa();

app.use(async function (ctx, next) {
  ctx.body = "Hello world!";
});

async function startServer() {
  let db = await dbHelpers.establishDBConnection();
  app.listen(3000);
  console.log("Server is listening to port 3000");
}

startServer();
