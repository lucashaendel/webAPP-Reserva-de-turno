const Operator = require("../models/Operator");
const bcrypt = require("bcrypt");

/////***Route to change operator Password***/////
const modifyPassword = async (req, res) => {
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

/////***Route to get all reservations***/////
const getAllReservations = async (req, res) => {
  res.send("hello");
};

module.exports = { modifyPassword };
