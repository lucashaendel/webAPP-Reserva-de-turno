const express = require("express");

const router = express.Router();

const {
  getAllTurns,
  createdTurn,
  updatedTurn,
  deletedTurn,
  getTurnById,
} = require("../controllers/turn");

// Traigo todos los turnos
router.get("/", getAllTurns);

// Traigo todos los turnos por Id de user
router.get("/user/:id", getTurnById);

// creo un turno y le asigno un usuario q es el que lo crea
router.post("/", createdTurn);

router.put("/:id", updatedTurn);

router.delete("/:id", deletedTurn);

module.exports = router;
