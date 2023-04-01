const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Word = require('../models/word.js');

router.get('/', (req,res,next) => {
  Word.find((err, words) => {
    if(err) return next(err)
    res.json(words);
  })
})

module.exports = router