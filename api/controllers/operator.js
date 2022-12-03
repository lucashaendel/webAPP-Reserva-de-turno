const Operator = require("../models/Operator");
const Branch = require("../models/Branch");
const Turn = require("../models/Turn");
const bcrypt = require("bcrypt");

/////***Route to change operator Password***/////
const updateOperator = async (req, res) => {
  try {
    const { id } = req.params;
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);
    const operatorPassword = await Operator.findByIdAndUpdate(
      id,
      { password: passwordHashed },
      {
        new: true,
      }
    );
    return res.status(200).send(operatorPassword);
  } catch (error) {
    return res.status(401).send(error);
  }
};

/////***Route to get branch reservation***/////
const getBranchReservation = async (req, res) => {
  const branchId = req.params.id;
  const reservations = await Branch.findById(branchId).populate("turns", {
    fullName: 1,
    date: 1,
    email: 1,
    phone: 1,
    attendance: 1,
  });
  res.status(200).send(reservations);
};

/////***Route to confirm reservation***/////
const resConfirmed = async (req, res) => {
  const turnId = req.params.id;
  const data = req.body;
  const newData = {
    attendance: data.attendance,
  };

  try {
    const confirmedTurn = await Turn.findByIdAndUpdate(turnId, newData, {
      new: true,
    });
    res.status(200).send(confirmedTurn);
  } catch (error) {
    res.status(401).send("No existe ese id en la db");
  }
};

module.exports = { updateOperator, getBranchReservation, resConfirmed };
