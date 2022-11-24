const User = require("../models/User");
const { generateToken } = require("../config/token");
const bcrypt = require("bcrypt");
const signupSchema = require("../middlewares/UserValidation");
const loginSchema = require("../middlewares/UserValidation");
// Ruta para el operator obtener todos los usuarios
const allUser = async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
};

// Ruta para crear 1 usuario
const createUser = (req, res, next) => {
  const { error, value } = signupSchema.validateSignup(req.body);
  if (error) {
    console.log(error);
    return res.status(400).send("Invalid Request");
  }
  const newUser = new User(req.body);
  newUser
    .save()
    .then((result) => res.status(201).send("Usuario creado"))
    .catch((error) => console.log(error));
};

// Ruta para hacer el login del usuario

const loginUser = (req, res) => {
  const { error, value } = loginSchema.validateLogin(req.body);
  if (error) {
    console.log(error);
    return res.status(400).send("Invalid Request");
  }

  const { email, password } = req.body;
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(404).send("no existe");

    //se compara la nueva password con la anterior para el login

    bcrypt.compare(password, user.password, (err, data) => {
      if (err) throw err;

      if (data) {
        let payload = {
          id: user._id,
          name: user.name,
          email: user.email,
        };
        let token = generateToken(payload);
        res.cookie("token", token);
        return res.status(200).send(payload);
      } else {
        return res.status(401).json({ msg: "Invalid credencial" });
      }
    });
  });
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
    name: data.name,
    lastname: data.lastname,
    dni: data.dni,
    email: data.email,
    password: data.password,
  };

  User.findByIdAndUpdate(id, newData, { new: true })
    .then((userUpdated) => {
      res.send(userUpdated);
    })
    .catch((error) => console.log(error));
};

module.exports = { allUser, createUser, loginUser, logOutUser, updateUser };
