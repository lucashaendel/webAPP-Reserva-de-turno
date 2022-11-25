const { validateToken } = require("../config/token");

// Realizamos una validacion para poder mantener la sesion iniciada en caso de q el usuario logeado no se haya deslogeado, rescatamos el token desde el req.cookies.token, hacemos la validacion del token y si todo salio correcto ejecutamos next()

function validateUser(req, res, next) {
  const token = req.cookies.token;
  const payload = validateToken(token);
  req.user = payload;

  if (payload) return next();
  res.sendStatus(401);
}

module.exports = validateUser;
