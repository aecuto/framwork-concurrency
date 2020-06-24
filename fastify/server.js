// Require the framework and instantiate it
const fastify = require("fastify")({
  logger: true,
});
require("dotenv").config();

const { SomeModel } = require("./mongodb");

fastify.get("/", (req, reply) => {
  reply.send({ msg: "Hello World!" });
});

fastify.post("/register", async (req, reply) => {
  const data = req.body;
  if (!data) {
    reply.send({ msg: "fail register" });
  }

  await SomeModel.create(data);
  reply.send({ msg: "register" });
});

fastify.listen(process.env.PORT, process.env.HOST, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
