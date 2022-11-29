const express = require("express");
const router = express.Router();

const { allBranchs, createdBranch } = require("../controllers/branch");

router.get("/", allBranchs);

router.post("/", createdBranch);

module.exports = router;
