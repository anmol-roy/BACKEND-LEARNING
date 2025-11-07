const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/noteapp')


const postSchema =   mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    likes: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'user'
}],

    content: String,    
    date: {
        type: Date,
        default: Date.now   
    }
})

module.exports = mongoose.model('post', postSchema);

