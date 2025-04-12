const mongoose = require('mongoose');

const clickSchema = new mongoose.Schema({
  linkId: mongoose.Schema.Types.ObjectId,
  timestamp: Date,
  ip: String,
  device: String,
  os: String,
  browser: String
});

module.exports = mongoose.model('Click', clickSchema);
