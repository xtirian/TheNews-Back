// IMPORT AND CONFIG EXPRESS
const express = require('express');
const newsModel = require('../module/news/news.model');
const router = express.Router();



router.get("/", async (req, res) => {

  const news = await newsModel.find({})

  //gonna pass as a array of news
  return res.status(200).json(news);
});

router.post("/", async (req, res) => {
  
  const news = await userModel.create({
    nome: req.body.name,
    imgURL: req.body.imgUrl,
    title: req.body.title,
    content: req.body.content,
    description: req.body.description,
    originalNews: req.body.originalNews,
    author: req.body.author,
    date: req.body.date,
  });
  
  //gonna return 201 for sucess when we are sign in an news
  return res.status(201).json(news);
});

module.exports = router;