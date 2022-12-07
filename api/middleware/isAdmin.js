const isAdmin = async (req, res, next) => {
  console.log(req.user);
  if (req.user.role === "admin") {
    next();
  } else {
    res.status(401).send("No estas autorizado");
  }
};

module.exports = isAdmin;
