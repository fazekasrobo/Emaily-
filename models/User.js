const mongoose = require('mongoose');
const Schema = mongoose.Schema; // same as -> const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('User', userSchema);