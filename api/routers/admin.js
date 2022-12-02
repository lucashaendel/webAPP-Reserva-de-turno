const express = require("express");
const router = express.Router();
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
router.post("/newOperator", createOperator); // borre el is admin
router.get("/myProfile/:id", getData); // borre el is admin
router.get("/", allAdmin); // borre el is admin
router.get("/operatorsList", allOperators); // borre el isAdmin
router.put("/myProfile/:id/modifyPassword", changePassword);

module.exports = router;
