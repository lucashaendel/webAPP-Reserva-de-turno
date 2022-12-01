const express = require("express");
const router = express.Router();
const isOperator = require("../middleware/auth");

const {
  updateOperator,
  getBranchReservation,
  resConfirmed,
} = require("../controllers/operator");

router.put("/myProfile/:id", isOperator, updateOperator);
router.get("/reservations/:id", isOperator, getBranchReservation);
router.put("/reservations/turn/:id", isOperator, resConfirmed);
module.exports = router;
