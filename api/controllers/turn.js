const Turn = require("../models/Turn");
const { validateToken } = require("../config/token");
const User = require("../models/User");
const Branch = require("../models/Branch");

// Traigo todos los turnos
const getAllTurns = (req, res) => {
  Turn.find().then((resp) => res.status(200).send(resp));
};

// creo un turno y le asigno un usuario q es el que lo crea
const createdTurn = async (req, res, next) => {
  const payload = validateToken(req.cookies.token);

  const { fullName, email, phone } = req.body;
  const user = await User.findById(payload.id);
  const branch = await Branch.findById(req.body.branch);

  const newTurn = new Turn({
    fullName,
    email,
    date: new Date(),
    phone,
    user: user._id,
    branch: branch._id,
  });

  try {
    const savedTurn = await newTurn.save();
    user.turns = user.turns.concat(savedTurn._id);
    branch.turns = branch.turns.concat(savedTurn._id);
    await user.save();
    await branch.save();
    res.send(savedTurn);
  } catch (error) {
    res.status(401).send("Necesitas estar logeado");
  }
};

const updatedTurn = async (req, res) => {
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
};

const deletedTurn = async (req, res) => {
  const idTurn = req.params.id;

  try {
    const turnDeleted = await Turn.findByIdAndRemove(idTurn);
    res.status(204).send(turnDeleted);
  } catch (error) {
    res.status(400).send("No existe ese documento");
  }
};

module.exports = { getAllTurns, createdTurn, updatedTurn, deletedTurn };
