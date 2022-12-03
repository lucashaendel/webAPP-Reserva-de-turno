const isAdmin = async (req, res, next) => {
  console.log(req.user);
  if (req.user.role === "admin") {
    next();
  } else {
    res.status(401).send("No estas autorizado");
  }
  // const token = req.cookies.token;
  // const payload = validateToken(token);
  // if (payload.role === "admin") return next();
  // else {
  //   res.status(403).send("You don't have permission to view this page");
  // }
};

module.exports = isAdmin;
