const { validateToken } = require("../config/token");

// Realizamos una validacion para poder mantener la sesion iniciada en caso de q el usuario logeado no se haya deslogeado, rescatamos el token desde el req.cookies.token, hacemos la validacion del token y si todo salio correcto ejecutamos next()

const validateUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) res.status(401).send("No token provided");

  const payload = validateToken(token);
  console.log(payload);

  req.userId = payload.id;
  if (payload) return next();
  else {
    res.status(401).send("No token provided");
  }
};

module.exports = validateUser;
