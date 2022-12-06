const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
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
  attendance: {
    type: Boolean,
    default: false,
  },
  reservationDate: {
    type: String,
    require: true,
  },
});

turnSchema.plugin(mongoosePaginate);

const turn = mongoose.model("Turn", turnSchema);

module.exports = turn;

// falta relacionar a el turno con el usuario y a el turno con la sucursal
