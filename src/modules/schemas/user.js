const mongoose = require('mongoose');
const { Schema } = mongoose;
const setTimestamp = require('../middleware/timestamp')

const userSchema = new Schema({
    username: String,
    telephone: String,
    password: String,
    email: String,
    favoriteProducts: Array,
    viewedProducts: Array,
    orders: Array
}, {versionKey: false})

userSchema.plugin(setTimestamp);

const User = mongoose.model('User', userSchema);

module.exports = User;
