const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  favoritProducts: {
    type: Array
  }
});

module.exports = mongoose.model('User', UserSchema);
