const express = require("express");
const router = express.Router();
const validateSchema = require("../middlewares/schemaValidation");
const { loginSchema, signupSchema } = require("../schema");

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
router.post("/login", validateSchema(loginSchema), loginUser);

router.post("/logout", logOutUser);

router.put("/:id", updateUser);

module.exports = router;
