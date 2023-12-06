// IMPORT AND CONFIG EXPRESS
const express = require("express");
const userModel = require("../module/user/user.model");
const router = express.Router();
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

//LOGIN

router.post("/", async (req, res, next) => {
  //verify body.email
  if (!req.body.email) {
    return res.status(400).json({
      message: "You must fill the field 'email'",
    });
  }

  //verify body.password
  if (!req.body.password) {
    return res.status(400).json({
      message: "You must fill the field 'password'",
    });
  }

  //verify user
  const verifyUser = await userModel.findOne({
    email: req.body.email,
  });

  //response if user exist
  if (!verifyUser) {
    return res.status(400).json({
      message: "Wrong E-mail or Password",
    });
  }

  //check password only if the user exist
  if (verifyUser) {

    //check password
    const verifyPassword = bcrypt.compareSync(
      req.body.password,
      verifyUser.password
    );

    //response if password doesnot exist
    if (!verifyPassword) {
      return res.status(400).json({
        message: "Wrong E-mail or Password",
      });    
    }

    const token = jwt.sign({
      _id: verifyUser._id
    }, 'secret' );


    return res.status(200).json({
      message: "Logged",
      token
    })
  }

  /*
   

  

  
  */
});

module.exports = router;
