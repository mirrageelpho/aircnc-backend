const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path');
const { link } = require("./config/mongo");
const routes = require("./routes");

const app = express();
mongoose.connect(link, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..','uploads')));
app.use(routes);

app.listen(3333, () => {
  console.log("server online on 3333");
});
