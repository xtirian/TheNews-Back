// IMPORT AND CONFIG EXPRESS
const express = require('express')
const app = express();
const cors = require('cors');



//this is how we configure to pass a json for a user
app.use(express.json());
const port = 8080;

app.use(cors());

//GETTING STARTED
app.get('/', (req, res) => {

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



//ROUTES

const userRouter = require('./src/routes/users');
const newsRouter = require('./src/routes/news');
const loginRouter = require('./src/routes/login')

app.use('/login', loginRouter)
app.use('/users', userRouter);
app.use('/news', newsRouter);



