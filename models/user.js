var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name:           String,
  email:          String
});

var userModel = mongoose.model('User', UserSchema);

module.exports = userModel;
