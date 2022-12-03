const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const model = require("./models");
const routers = require("./routers");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/api", routers);
console.log(process.env.MONGO_URI);
mongoose
  .connect("mongodb+srv://admin:admin1234@webappturnos.cvscsqu.mongodb.net/?retryWrites=true&w=majority")
  .then((result) => {
    app.listen(5000, () => {
      console.log("servidor escuchando en el puerto 5000");
    });
    console.log("Conectado a la DB");
  })
  .catch((error) => console.log(error));
