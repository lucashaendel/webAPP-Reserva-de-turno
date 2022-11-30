const express = require("express");
const router = express.Router();
const user = require("./user");
const admin = require("./admin");
const operator = require("./operator");

router.use("/user", user);
router.use("/admin", admin);
router.use("/operator", operator);

module.exports = router;
