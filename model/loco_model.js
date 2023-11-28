const mongoose = require("mongoose");

const locoSchema = new mongoose.Schema({
  locoCode: { type: String, required: true },
  locoName: { type: String, required: true },
  locoDimension: { type: String, required: true },
  status: { type: String, required: true },
  time: { type: Date, default: Date.now },
});

const Locomotif = mongoose.model("Locomotif", locoSchema);

module.exports = { Locomotif };
