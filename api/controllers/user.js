const User = require("../models/User");
const { generateToken } = require("../config/token");

const allUser = async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
};

const createUser = (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then((result) => res.status(201).send("Usuario creado"))
    .catch((error) => console.log(error));
};

const loginUser = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).then((user) => {
    if (!user) return res.send("no existe");
    user
      .validatePassword(password)
      .then((isValid) => {
        if (!isValid) return res.sendStatus(401);
        let payload = {
          id: user._id,
          name: user.name,
          email: user.email,
        };
        let token = generateToken(payload);

        res.cookie("token", token);

        res.send(payload);
      })
      .catch((error) => console.log(error));
  });
};

const logOutUser = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

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
