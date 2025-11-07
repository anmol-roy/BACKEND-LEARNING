const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/noteapp')


const userSchema =   mongoose.Schema({
    username: String,
    name: String,
    Age: Number,
    email: String,
    password: String,
})

module.exports = mongoose.model('user', userSchema);

