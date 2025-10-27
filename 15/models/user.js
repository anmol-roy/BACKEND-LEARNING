const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/authtestapp', {


}
)

const userSchema = new mongoose.Schema({
    userNmae : String,
    email : String,
    password : String,
    age:Number
})


mongoose.model('User',userSchema);

module.exports = mongoose.model('User');