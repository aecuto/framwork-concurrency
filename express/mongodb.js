const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost:27018/express";

mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//Define a schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const SomeModel = mongoose.model("SomeModel", SomeModelSchema);

module.exports = {
  SomeModel,
};
