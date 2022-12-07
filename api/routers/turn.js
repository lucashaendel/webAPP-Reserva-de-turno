const express = require("express");

const router = express.Router();

const {
  getAllTurns,
  createdTurn,
  updatedTurn,
  deletedTurn,
  getOneTurns,
} = require("../controllers/turn");

// Traigo todos los turnos
router.get("/", getAllTurns);

// Traigo un turno por su id
router.get("/:id", getOneTurns);

// creo un turno y le asigno un usuario q es el que lo crea
router.post("/", createdTurn);

router.put("/:id", updatedTurn);

router.delete("/:id", deletedTurn);

module.exports = router;

/* // Traigo todos los turnos
router.get("/", (req, res) => {
  Turn.find().then((resp) => res.status(200).send(resp));
});

// creo un turno y le asigno un usuario q es el que lo crea
router.post("/", async (req, res, next) => {
  const payload = validateToken(req.cookies.token);

  const { fullName, email, phone } = req.body;
  const user = await User.findById(payload.id);

  const newTurn = new Turn({
    fullName,
    email,
    date: new Date(),
    phone,
    user: user._id,
  });

  try {
    const savedTurn = await newTurn.save();
    user.turns = user.turns.concat(savedTurn._id);
    await user.save();
    res.send(savedTurn);
  } catch (error) {
    res.status(401).send("Necesitas estar logeado");
  }
});

router.put("/:id", async (req, res) => {
  const idTurn = req.params.id;
  //const payload = validateToken(req.cookies.token);

  const data = req.body;

  const newData = {
    fullName: data.fullName,
    date: new Date(),
    dni: data.dni,
    email: data.email,
    phone: data.phone,
  };

  try {
    const turnUpdated = await Turn.findByIdAndUpdate(idTurn, newData, {
      new: true,
    });
    res.send(turnUpdated);
  } catch (error) {
    res.status(401).send("No existe ese id en la db");
  }
});

router.delete("/:id", async (req, res) => {
  const idTurn = req.params.id;

  try {
    const turnDeleted = await Turn.findByIdAndRemove(idTurn);
    res.status(204).send(turnDeleted);
  } catch (error) {
    res.status(400).send("No existe ese documento");
  }
}); */
