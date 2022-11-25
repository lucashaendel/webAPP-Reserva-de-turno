const express = require("express");
const router = express.Router();
const validateUser = require("../middleware/auth");

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

router.get("/me", validateUser, (req, res) => {
  res.send(req.user);
});

router.get("/secret", validateUser, (req, res) => {
  res.send(req.user);
});

router.put("/:id", updateUser);

module.exports = router;
