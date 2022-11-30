const express = require("express");
const router = express.Router();
const isOperator = require("../middleware/auth")

const { modifyPassword } = require("../controllers/operator");

router.put("/myProfile/:id/modifyPassword",isOperator, modifyPassword);

module.exports = router;
