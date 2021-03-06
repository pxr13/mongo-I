const mongoose = require('mongoose');

const { Schema } = mongoose;

const FriendSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 1,
    max: 120,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now(),
    required: true
  }
});

const Friend = mongoose.model('friend', FriendSchema);

module.exports = Friend;
