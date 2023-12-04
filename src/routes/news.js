var express = require("express");
var router = express.Router();


router.get('/news', (req, res) => {

  //gonna pass as a array of news
  return res.status(200).json([])
 })




app.post('/news', (req, res) => {

  //gonna return 201 for sucess when we are sign in an news
  return res.status(201).json([])
})
