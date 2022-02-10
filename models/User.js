const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    googleId: String,
    photoId: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;