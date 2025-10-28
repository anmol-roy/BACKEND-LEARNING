const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testingdatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  age: {
    type: Number,
    min: 1,
    required: true
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post' // 👈 tells Mongoose which model this references
  }]
});

module.exports = mongoose.model('User', userSchema);
