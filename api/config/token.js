const jwt = require("jsonwebtoken");

//Clave secreta

const SECRET = "Xruce";

//Generamos el token, recibiendo el payload q guardamos ahi.

const generateToken = (payload) => {
  const token = jwt.sign(payload, SECRET, { expiresIn: "2h" });

  return token;
};

//Validamos el token
const validateToken = (token) => {
  return jwt.verify(token, SECRET);
};

module.exports = { generateToken, validateToken };
