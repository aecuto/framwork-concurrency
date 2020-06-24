const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { SomeModel } = require("./mongodb");

router.get("/", (req, res) => {
  res.send({ msg: "Hello World!" });
});

router.post("/register", async (req, res) => {
  const data = req.body;

  if (!data) {
    console.log("===> Fail created");
    res.send({ msg: "fail register" });
  }

  const created = await SomeModel.create(data);
  console.log("===> created successfuly Id: ", created._id);
  res.send({ msg: "register" });
});

app.use("/", router);

const url = `http://${process.env.HOST}:${process.env.PORT}`;

app.listen(process.env.PORT, process.env.HOST, () =>
  console.log(`App listening at ${url}`)
);
