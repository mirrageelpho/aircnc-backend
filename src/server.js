const express = require("express");
const mongoose = require("mongoose");
const { link } = require("./config/mongo");
const routes = require("./routes");

const app = express();

app.use(express.json());
mongoose.connect(link, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(routes);

app.listen(3333, () => {
  console.log("server online on 3333");
});