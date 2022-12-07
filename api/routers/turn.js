const express = require("express");

const router = express.Router();

const {
  getAllTurns,
  createdTurn,
  updatedTurn,
  deletedTurn,
  getOneTurns,
  getTurnById,
} = require("../controllers/turn");

// Traigo todos los turnos
router.get("/", getAllTurns);


// Traigo un turno por su id
router.get("/:id", getOneTurns);

// Traigo todos los turnos por Id de user
router.get("/user/:id", getTurnById);


// creo un turno y le asigno un usuario q es el que lo crea
router.post("/", createdTurn);

router.put("/:id", updatedTurn);

router.delete("/:id", deletedTurn);

router.get("/user/:id", getTurnById);

module.exports = router;
