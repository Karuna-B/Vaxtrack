const mongoose = require("mongoose");

const vaccineSchema = new mongoose.Schema({
  vaccineName: {
    type: String,
    required: true,
  },
  vaccinationDate: {
    type: Date,
    required: true,
  },
  batchNumber: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  localBody: {
    type: String,
    required: true,
  },
  healthPostName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Vaccine", vaccineSchema);
