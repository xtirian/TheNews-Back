// IMPORT AND CONFIG EXPRESS
const express = require('express')
const app = express();

//this is how we configure to pass a json for a user
app.use(express.json());
const port = 4000;

//IMPORT ROUTES
const routes = require('./src/routes');


//GETTING STARTED
app.get('/', (req, res) => {

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



//ROUTES
routes(app)


