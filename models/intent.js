const mongoose = require('mongoose');

const IntentSchema = new mongoose.Schema({
    intent : String,
    sub_intent : String,
    point: Number
})

module.exports = mongoose.model('intent', IntentSchema)