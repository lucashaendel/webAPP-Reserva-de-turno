const express = require("express");
const router = express.Router();
const user = require("./user");
const branch = require("./branch");
const turn = require("./turn");
const admin = require("./admin");
const operator = require("./operator");

router.use("/user", user);
router.use("/admin", admin);
router.use("/operator", operator);
router.use("/branch", branch);
router.use("/turn", turn);


module.exports = router;
