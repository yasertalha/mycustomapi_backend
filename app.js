const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;
const { MONGODBURL } = require("./keys");

const cors = require("cors");
app.use(cors());
require("./user");
app.use(express.json());
app.use(require("./router"));
mongoose.connect(MONGODBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.on("connected", () => {
  console.log("MONGODB CONNECTED");
});
mongoose.connection.on("error", (err) => {
  console.log("MONGODB error : " + err);
});

app.listen(PORT, () => {
  console.log("SERVER IS RUNNING ON : " + PORT);
});
