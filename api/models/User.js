const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      require: true,
    },

    dni: {
      type: Number,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    salt: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const salt = bcrypt.genSaltSync(10);
  this.salt = salt;

  return this.hashGen(this.password, salt).then(
    (hash) => (this.password = hash)
  );
});

userSchema.pre("findOneAndUpdate", function (next) {
  const salt = bcrypt.genSaltSync(10);
  const data = this._update;
  data.salt = salt;
  if (data.password === undefined) return next();
  bcrypt.hash(data.password, data.salt, (err, hashedPassword) => {
    if (err) {
      next(err);
    } else {
      data.password = hashedPassword;
      next();
    }
  });
});

userSchema.methods.hashGen = function (password, salt) {
  return bcrypt.hash(password, salt);
};

const user = mongoose.model("User", userSchema);

module.exports = user;
