const express = require("express");
const router = express.Router();
const validateUser = require("../middleware/auth");
const isAdmin = require("../middleware/isAdmin");

const {
  createAdmin,
  createOperator,
  getData,
  changePassword,
  allAdmin,
  allOperators,
} = require("../controllers/admin");

router.post("/registerAdmin", createAdmin);
router.post("/newOperator", createOperator);
router.get("/myProfile/:id", getData);
router.get("/", allAdmin);
router.get("/operatorsList", allOperators);
router.put("/myProfile/:id/modifyPassword", changePassword);

module.exports = router;
