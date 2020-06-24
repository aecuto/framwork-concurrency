const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://aecuto:aecuto@aecuto-evbpo.mongodb.net/fastify";

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
