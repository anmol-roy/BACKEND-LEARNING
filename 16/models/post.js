const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testingdatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const postSchema = new mongoose.Schema({
    postdata:  String,
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // 👈 tells Mongoose which model this references
    },
    date : {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);
