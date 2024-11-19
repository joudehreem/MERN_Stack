const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Required"],
    minlength: [4, "Must be 4 char"]
  },
  age: {
    type: Number,
    min: [1, "one Char"],
    max: [3, "must 3 char"]
  },
}  ,{ timestamps: true }
);
const User = mongoose.model('User', UserSchema)
module.exports = User;
