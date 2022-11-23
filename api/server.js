const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const model = require("./models");
const routers = require("./routers");
const app = express();

app.use(express.json());
app.use("/api", routers);

mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => {
    app.listen(5000, () => {
      console.log("servidor escuchando en el puerto 5000");
    });
    console.log("Conectado a la DB");
  })
  .catch((error) => console.log(error));
