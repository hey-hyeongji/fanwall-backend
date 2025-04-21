// models/Change.js
const mongoose = require('mongoose');

const changeSchema = new mongoose.Schema({
  section: { type: String, required: true },
  slotNum:  { type: String, default: "" },
  text:     String,
  color:    String,
  link:     String,
  desc:     String,
  image:    String
}, { timestamps: true });

module.exports = mongoose.model('Change', changeSchema);
