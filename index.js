// IMPORT AND CONFIG EXPRESS
const express = require('express')
const app = express();


//this is how we configure to pass a json for a user
app.use(express.json());
const port = 4000;

//IMPORT BCRYT
const bcrypt = require('bcrypt');

//IMPORT MODELS
const userModel = require('./src/module/user/user.model')


//GETTING STARTED
app.get('/', (req, res) => {

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//LOGIN




//ROUTES

const userRouter = require('./src/routes/users');
const newsRouter = require('./src/routes/news');

app.use('/users', userRouter);
app.use('/news', newsRouter);



