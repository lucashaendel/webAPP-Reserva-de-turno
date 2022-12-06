const mongoose = require("mongoose");
const { Schema } = mongoose;

const turnSchema = new Schema({
  date: {
    type: Date,
  },
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  branch: {
    type: Schema.Types.ObjectId,
    ref: "Branch",
  },
  branchName: {
    type: String,
    require: true,
  },
  attendance: {
    type: Boolean,
    default: false,
  },
  reservationDate: {
    type: String,
    require: true,
  },
});

const turn = mongoose.model("Turn", turnSchema);

module.exports = turn;

// falta relacionar a el turno con el usuario y a el turno con la sucursal
