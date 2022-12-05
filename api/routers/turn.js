const express = require("express");

const router = express.Router();

const {
  getAllTurns,
  createdTurn,
  updatedTurn,
  deletedTurn,
} = require("../controllers/turn");

// Traigo todos los turnos
router.get("/", getAllTurns);

// creo un turno y le asigno un usuario q es el que lo crea
router.post("/", createdTurn);

router.put("/:id", updatedTurn);

router.delete("/:id", deletedTurn);

module.exports = router;
