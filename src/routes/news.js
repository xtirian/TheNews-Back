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
  
  const news = await newsModel.create({
    author: req.body.author,
    content: req.body.content,
    date: req.body.date,
    description: req.body.description,
    imgURL: req.body.imgURL,
    NewsFrom: req.body.NewsFrom,
    originalNews: req.body.originalNews,
    title: req.body.title,
  });
  
  //gonna return 201 for sucess when we are sign in an news
  return res.status(201).json([news, {
    message: "News created"
  }]);
});

module.exports = router;