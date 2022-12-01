const mongoose = require("mongoose");
const { Schema } = mongoose;

const operatorSchema = new Schema(
  {
    fullName: {
      type: String,
      require: true,
    },

    dni: {
      type: Number,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    branch: {
      ref: "Branch",
      type: Schema.Types.ObjectId,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      enum: ["user", "operator", "admin"],
      default: "operator",
    },
    salt: {
      type: String,
    },
  },
  { timestamps: true }
);

const operator = mongoose.model("Operator", operatorSchema);

module.exports = operator;
