const express = require("express");
const router = express.Router();
const isOperator = require("../middleware/auth");

const {
  updateOperator,
  getBranchReservation,
  resConfirmed,
} = require("../controllers/operator");

router.put("/myProfile/:id", updateOperator);
router.get("/reservations/:id", getBranchReservation);
router.put("/reservations/turn/:id", resConfirmed);
module.exports = router;
