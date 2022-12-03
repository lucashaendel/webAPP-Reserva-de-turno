const { validateToken } = require("../config/token");

// Realizamos una validacion para poder mantener la sesion iniciada en caso de q el usuario logeado no se haya deslogeado, rescatamos el token desde el req.cookies.token, hacemos la validacion del token y si todo salio correcto ejecutamos next()

const validateUser = async (req, res, next) => {
  const token = req.headers.authorization;
  if(token?.startsWith("Bearer ")) {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = await validateToken(token);
    if (decoded) {
      req.user = decoded;
      next();
    } else {
      res.status(401).send("No estas autorizado");
    }
  }

  // console.log(token);
  // if (!token) {
  //   res.status(401).send("No token provided");
  // } else {
  //   const payload = validateToken(token);

  //   req.userId = payload.id;
  //   if (payload) return next();
  // }
};

module.exports = validateUser;
