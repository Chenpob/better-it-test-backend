const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
    word_id : String,
    word_name : String,
    word_type : String
})

module.exports = mongoose.model('Word', WordSchema)