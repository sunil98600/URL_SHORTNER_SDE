const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  originalUrl: String,
  shortId: String,
  customAlias: String,
  expirationDate: Date,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Link', linkSchema);
