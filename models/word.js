const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
    word_name : String,
    word_type : String
})

module.exports = mongoose.model('word', WordSchema)