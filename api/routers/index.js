const express = require("express");
const router = express.Router();
const user = require("./user");
const branch = require("./branch");
const turn = require("./turn");

router.use("/user", user);
router.use("/branch", branch);
router.use("/turn", turn);

module.exports = router;
