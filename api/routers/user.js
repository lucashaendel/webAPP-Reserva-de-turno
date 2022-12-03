const express = require("express");
const router = express.Router();
const validateSchema = require("../middlewares/schemaValidation");
const { loginSchema, signupSchema } = require("../schema");
const validateUser = require("../middleware/auth");
const isAdmin = require("../middleware/isAdmin");
const isUser = require("../middleware/isUser");

const {
  allUser,
  createUser,
  loginUser,
  logOutUser,
  updateUser,
} = require("../controllers/user");

// ruta para el operator obtener los usuarios
router.get("/", allUser);

router.post("/register", validateSchema(signupSchema), createUser);
// Login Usuario
router.post("/login",  loginUser);

router.post("/logout", validateUser, logOutUser);

router.get("/me", validateUser, (req, res) => {
  res.send(req.user);
});

router.get("/secret", validateUser, (req, res) => {
  res.send(req.user);
});

router.put("/:id", [validateUser, isUser], updateUser);

module.exports = router;
