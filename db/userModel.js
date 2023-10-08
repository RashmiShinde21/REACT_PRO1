// userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  // Other fields and schema definition
});

 const User = mongoose.model('USER', userSchema);
 module.exports=User;