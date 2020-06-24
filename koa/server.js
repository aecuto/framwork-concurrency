const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
require("dotenv").config();

const port = 3002;
const app = new Koa();
const router = new Router();
app.use(bodyParser());

const { SomeModel } = require("./mongodb");

// Response to GET requests
router.get("/", async (ctx) => {
  ctx.body = { msg: "Hello World!" };
});

router.post("/register", async (ctx) => {
  const data = ctx.request.body;

  if (!data) {
    console.log("===> Fail created");
    ctx.body = { msg: "fail register" };
  }

  await SomeModel.create(data);
  console.log("===> created successfuly Id: ", created._id);
  ctx.body = { msg: "register" };
});

// Add routes and response to the OPTIONS requests
app.use(router.routes()).use(router.allowedMethods());

const url = `http://${process.env.HOST}:${process.env.PORT}`;

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`App listening at ${url}`);
});
