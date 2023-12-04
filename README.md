# The News Project - Backend

In this project you gona find a backend for my project The News I made as a challenge from DNC School. 

## Table of Contents
- [Technologies](#technologies)
- [What I learned](#what-i-learned)
  - [Mongo Config](#mongo-config)


## Technologies
- NodeJS 
- ExpressJs - NodeJS Framework
- MongoDB - Data Base
- Mongoose - for Data Base management
- Jest - for testing
- BCrypt - for data encryptation 


## What I learned

### Mongo config

I started creating a config for MongoDB using the Mongoose after installing the MongoDB and started the server with the command:
```bash
$ sudo systemctl start mongod && systemctl start mongod
```

Then I created a ``mongo.js`` config to export the base configuration for MongoDB with Mongoose:

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/local');
module.exports = mongoose;
```

The localhost:27017/local is only the default port that mongo runs in your PC. So check if in your PC is the same, because if it is not, you have to change this config in your project.

Finally I create models for News and users. In this models I set Schemas and then address it with the mongoose:

``` js
import mongoose from "mongoose";

const userSchema = new Schema({
  name: String,
  email: String,
  password: String
}, {
  timestaps: true} //mantem o registro do momento que o regitro foi criado ou atualizado.
  );

  const UsersModel = mongoose.model('users', userSchema);

  export default UsersModel
```

### Routes

To create Routes we are using the ExpressJs. 

First thing I started importing the express fo the project by calling it with:  

```js
const express = require('express')
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

```

This was created using the documentation from ExpressJS.

After that I created the routes with the get and post methods:

``` js

app.use(express.json());

app.get('/users', (req, res) => {

  //List users
  return res.status(200).json([])
 
})

app.post('/users', (req, res) => {

  // rule to req e-mail
  if(!req.body.email){
    return res.status(400).json({
      message: "The field E-mail is required"
    })
  }

  //rule to req password
  if(!req.body.password){
    return res.status(400).json({
      message: "The field Password is required"
    })
  }

  //sign in an user
  return res.status(201).json([])
})

```

Important to set the ``app.use(express.json())`` so we can use the json extensio when using 