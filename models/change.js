// models/change.js
const mongoose = require('mongoose');

const changeSchema = new mongoose.Schema({
  section:   { type: String, required: true },
  slotNum:   { type: String, required: true },
  text:      String,
  color:     String,
  link:      String,
  desc:      String,
  image:     String,
  fontColor: String,
  fontSize:  String
}, { timestamps: true });

module.exports = mongoose.model('Change', ChangeSchema);