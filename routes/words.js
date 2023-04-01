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

router.get('/:type', (req,res,next) => {
  Word.find({word_type: req.params.type},(err, words) => {
    if(err) return next(err)
    res.json(words);
  })
})

router.post('/', (req, res, next) => {
  Word.create(req.body, (err, post) => {
      if (err) return next(err);
      res.json(post);
  })
})

router.delete('/:id', (req, res, next) => {
  Word.findByIdAndDelete(req.params.id, (err, post) => {
      if (err) return next(err);
      res.json(post);
  })
})


module.exports = router