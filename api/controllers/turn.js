const Turn = require("../models/Turn");
const User = require("../models/User");
const Branch = require("../models/Branch");

// Traigo todos los turnos
const getAllTurns = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;

  const turns = await Turn.paginate({}, { limit, page });
  //Turn.find().then((resp) => res.status(200).send(resp));
  res.json(turns);
};

// Traigo todos los turno por UserID
const getTurnById = (req, res) => {
  const userID = req.params.id;
  Turn.find({ user: userID })
    .then((resp) => res.status(200).send(resp))
    .catch((error) => {
      res
        .status(400)
        .json("An Error occured while trying to get your appoinments");
    });
};

// creo un turno y le asigno un usuario q es el que lo crea
const createdTurn = async (req, res, next) => {
  const { fullName, email, phone, user, reservationDate, branchName } =
    req.body;
  const usuario = await User.findById(user);
  const branch = await Branch.findById(req.body.branch);

  const newTurn = new Turn({
    fullName,
    email,
    date: new Date(),
    phone,
    user: usuario._id,
    branch: branch._id,
    reservationDate,
    branchName,
  });

  try {
    const savedTurn = await newTurn.save();
    usuario.turns = usuario.turns.concat(savedTurn._id);
    branch.turns = branch.turns.concat(savedTurn._id);
    await usuario.save();
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


const getOneTurns = async (req, res) => {
  const idTurn = req.params.id;

  try {
    const oneTurns = await Turn.findById(idTurn);
    res.status(200).send(oneTurns);
  } catch (error) {
    res.status(400).send("No existe ese turno");
  }
};


module.exports = {
  getAllTurns,
  createdTurn,
  updatedTurn,
  deletedTurn,
  getOneTurns,
  getTurnById,

};
