const Branch = require("../models/Branch");

const allBranchs = async (req, res) => {
  const branchs = await Branch.find()
    .populate("turns", {
      fullName: 1,
      date: 1,
      email: 1,
      phone: 1,
      attendance: 1,
    })
    .populate("operators", { fullName: 1, email: 1, dni: 1, branch: 1 });

  res.status(200).send(branchs);
};

const selectBranch = async (req, res) => {
  const id = req.params.id;
  const branchs = await Branch.findById(id)
    .populate("turns", {
      fullName: 1,
      date: 1,
      email: 1,
      phone: 1,
      attendance: 1,
    })
    .populate("operators", { fullName: 1, email: 1, dni: 1, branch: 1 });

  res.status(200).send(branchs);
};

const createdBranch = async (req, res) => {
  console.log(req.body);
  const { name, email, telephone, maxCapacity, start, end } = req.body;

  const newBranch = new Branch({
    name,
    email,
    telephone,
    maxCapacity,
    start,
    end,
  });
  try {
    const savedBranch = await newBranch.save();
    res.send(savedBranch);
  } catch (error) {
    res.status(401).send("No se pudo crear una sucursal");
  }
};

module.exports = { allBranchs, createdBranch, selectBranch };
