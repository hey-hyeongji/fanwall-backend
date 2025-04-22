// models/change.js
const mongoose = require('mongoose');

const ChangeSchema = new mongoose.Schema({
  section:   { type: String, required: true },
  slotNum:   { type: String, default: '' },
  text:      { type: String, default: '' },
  color:     { type: String, default: '' },
  fontColor: { type: String, default: '' },
  fontSize:  { type: String, default: '' },
  link:      { type: String, default: '' },
  desc:      { type: String, default: '' },
  image:     { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Change', ChangeSchema);