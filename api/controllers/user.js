const User = require("../models/User");
const { generateToken } = require("../config/token");
const bcrypt = require("bcrypt");
const Operator = require("../models/Operator");
const Admin = require("../models/Admin");

// Ruta para el operator obtener todos los usuarios
const allUser = async (req, res) => {
  const users = await User.find().populate("turns", {
    fullName: 1,
    date: 1,
    email: 1,
    phone: 1,
    attendance: 1,
  });
  res.status(200).send(users);
};

// Ruta para crear 1 usuario

const createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const { fullName, dni, email, password } = body;
    const user = await User.find({ $or: [{ email }, { dni }] });

    if (user[0]) return res.status(401).send("El usuario ya existe");
    else {
      const saltRounds = 10;
      const passwordHash = await bcrypt.hash(password, saltRounds);
      const newUser = new User({
        fullName,
        dni,
        email,
        password: passwordHash,
      });
      const savedUser = await newUser.save();
      res.send(savedUser);
    }
  } catch (error) {
    next(error);
  }
};

// Ruta para hacer el login del usuario
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const operator = await Operator.findOne({ email });
    const admin = await Admin.findOne({ email });

    const result = [user, operator, admin];
    const resultado = result.filter((e) => e != null);

    bcrypt.compare(password, resultado[0].password, (err, data) => {
      if (err) throw err;
      if (data) {
        let payload = {
          id: resultado[0]._id,
          fullName: resultado[0].fullName,
          email: resultado[0].email,
          role: resultado[0].role,
          dni: resultado[0].dni,
        };
        let token = generateToken(payload);
        res.cookie("token", token);
        return res.json({ token, user: payload });
      } else {
        return res.status(401).json({ msg: "Invalid credencial" });
      }
    });
  } catch (error) {
    res.send(error);
  }
};

// Ruta para el logout del usuario
const logOutUser = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

// Ruta para actualizar el usuario
const updateUser = (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const newData = {
    password: data.password,
    telephone: data.telephone,
  };

  User.findByIdAndUpdate(id, newData, { new: true })
    .then((userUpdated) => {
      res.send(userUpdated);
    })
    .catch((error) => console.log(error));
};

module.exports = { allUser, createUser, loginUser, logOutUser, updateUser };
