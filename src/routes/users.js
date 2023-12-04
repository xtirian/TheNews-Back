// IMPORT AND CONFIG EXPRESS
const express = require('express');
const userModel = require('../module/user/user.model');
const router = express.Router();


router.get('/', async (req, res) => {

  const users = await userModel.find({})

  //gonna pass as a array of users
  return res.status(200).json(users)
 
})


router.post('/', async (req, res) => {



  // rule to req name
  if(!req.body.name){
    return res.status(400).json({
      message: "The field Name is required"
    })
  }

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


  // Veridy if the email is already used

  const verifyUser = await userModel.find({ email: req.body.email})

  if(verifyUser.length){
    return res.status(400).json({
      message: "This e-mail was already registred"
    })
  }


  //const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
  // Should store hash in password DB.
  const cryptPassword = bcrypt.hashSync(req.body.password, 10);

  const user = await userModel.create({
    name: req.body.name,
    email: req.body.email,
    password: cryptPassword
  });

  //sign in an user
  return res.status(201).json(user);
})


module.exports = router;