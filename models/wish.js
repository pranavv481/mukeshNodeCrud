const mongoose = require('mongoose');
const WishSchema = mongoose.Schema({
  wish: String,
});

module.exports = mongoose.model('wishes', WishSchema);
