const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { generateToken } = require("../config/token");

const {
  allUser,
  createUser,
  loginUser,
  logOutUser,
  updateUser,
} = require("../controllers/user");

// ruta para el operator obtener los usuarios
router.get("/", allUser);

router.post("/register", createUser);
// Login Usuario
router.post("/login", loginUser);

router.post("/logout", logOutUser);

router.put("/:id", updateUser);

module.exports = router;
