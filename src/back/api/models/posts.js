const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Post', new Schema({
    shortid: Schema.Types.Mixed,
    cover: String,
    title: String,
    author: String,
    category: String,
    text: String,
    date: Date,
    timestamp: Number
}));
