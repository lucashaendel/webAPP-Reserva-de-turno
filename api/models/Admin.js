const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema(
  {
    fullName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    dni: {
      type: Number,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      enum: ["user", "operator", "admin"],
      default: "admin",
    },
    salt: {
      type: String,
    },
  },
  { timestamps: true }
);

const admin = mongoose.model("Admin", adminSchema);

module.exports = admin;
