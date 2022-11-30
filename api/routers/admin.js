const express = require("express");
const router = express.Router();
const isAdmin = require("../middleware/isAdmin");
const isUser = require("../middleware/isUser");
const {
  createAdmin,
  createOperator,
  getData,
  changePassword,
  allAdmin,
  allOperators,
} = require("../controllers/admin");

router.post("/registerAdmin", isAdmin, createAdmin);
router.post("/newOperator", isAdmin, createOperator);
router.get("/myProfile/:id", isAdmin, getData);
router.get("/", isAdmin, allAdmin);
router.get("/operatorsList", isAdmin, allOperators);
router.put("/myProfile/:id/modifyPassword", isAdmin, changePassword);

module.exports = router;
