const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    name: String,
    email: String,
    password: Schema.Types.Mixed,
    timestamp: Number
}));
