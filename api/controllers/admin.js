const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const Operator = require("../models/Operator");

/////***Route to create Admin***/////
const createAdmin = async (req, res, next) => {
  try {
    const { body } = req;
    const { fullName, dni, email, password } = body;
    const admin = await Admin.find({ $or: [{ email }, { dni }] });
    console.log(admin);
    if (admin[0]) return res.status(401).send("El usuario ya existe");
    else {
      const saltRounds = 10;
      const passwordHash = await bcrypt.hash(password, saltRounds);
      const newAdmin = new Admin({
        fullName,
        dni,
        email,
        password: passwordHash,
      });
      const savedAdmin = await newAdmin.save();
      res.send(savedAdmin);
    }
  } catch (error) {
    next(error);
  }
};

/////***Route to create Operator***/////
const createOperator = async (req, res, next) => {
  try {
    const { body } = req;
    const { fullName, dni, email, password } = body;
    const operator = await Operator.find({ $or: [{ email }, { dni }] });
    if (operator[0]) return res.status(401).send("El usuario ya existe");
    else {
      const saltRounds = 10;
      const passwordHash = await bcrypt.hash(password, saltRounds);
      const newOperator = new Operator({
        fullName,
        dni,
        email,
        password: passwordHash,
      });
      const savedOperator = await newOperator.save();
      res.send(savedOperator);
    }
  } catch (error) {
    next(error);
  }
};

/////***Route to get Admin profile info***/////
const getData = async (req, res) => {
  const id = req.params.id;
  await Admin.findById(id)
    .then((admin) => res.status(200).send(admin))
    .catch((error) =>
      res.status(400).send(" An error ocurred while getting the data")
    );
};

/////***Route to change admin Password***/////
const changePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);
    const adminPassword = await Admin.findByIdAndUpdate(
      id,
      { password: passwordHashed },
      { new: true }
    );
    res.status(200).send(adminPassword);
  } catch (error) {
    res.status(401).send(error);
  }
};

/////***Route to get all admin***/////
const allAdmin = async (req, res) => {
  const admin = await Admin.find();
  res.status(200).send(admin);
};

/////***Route to get all operators***/////
const allOperators = async (req, res) => {
  const operators = await Operator.find();
  res.status(200).send(operators);
};

/* 
//Route to get all branches
const allBranches = async (req, res) => {
  const branches = await Branch.find();
  res.status(200).send(branches);
}; */

module.exports = {
  createAdmin,
  getData,
  changePassword,
  allAdmin,
  createOperator,
  allOperators,
  // allBranches,
};
