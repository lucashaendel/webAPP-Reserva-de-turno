const express = require("express");
const router = express.Router();

const {
  allBranchs,
  selectBranch,
  createdBranch,
} = require("../controllers/branch");

router.get("/", allBranchs);
router.get("/:id", selectBranch);

router.post("/", createdBranch);

module.exports = router;
