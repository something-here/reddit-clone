const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;

const likesSchema = new mongoose.Schema({
    identification: Number,             //ID to be assigned by mongo
    username: String,                   //username from user table
    postId: String,                     //post from post table
},
    {
        timestamps: true
    }
);

module.exports.Likes = mongoose.model('Likes', likesSchema);