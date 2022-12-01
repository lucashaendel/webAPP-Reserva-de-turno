const mongoose = require("mongoose");
const { Schema } = mongoose;

const branchSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  telephone: {
    type: Number,
    require: true,
  },
  maxCapacity: {
    type: Number,
    require: true,
  },
  turns: [
    {
      type: Schema.Types.ObjectId,
      ref: "Turn",
    },
  ],
  operators: [
    {
      type: Schema.Types.ObjectId,
      ref: "Operator",
    },
  ],
  start: {
    type: String,
  },
  end: {
    type: String,
  },
});

const branch = mongoose.model("Branch", branchSchema);

module.exports = branch;
