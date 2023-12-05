// IMPORT AND CONFIG EXPRESS
const express = require('express');
const userModel = require('../module/user/user.model');
const router = express.Router();


//LOGIN

router.post('/', async (req, res, next) => {
  if(!req.body.email) {
    return res.status(400).json({
      message: "You must fill the field 'email'"
    });
  }
  if(!req.body.password){
    return res.status(400).json({
      message: "You must fill the field 'password'"
    });
  }

  const verifyUser = await userModel.findOne({
    email: req.body.email
  });

  const verifyPassword = bcrypt.compareSync(req.body.password, verifyUser.password)

  if(!verifyUser) {
    return res.status(400).json({
      message: "Wrong E-mail or Password"
    })
  }

  if(!verifyPassword){
    return res.status(400).json({
      message: "Wrong E-mail or Password"
    })
  }

  const token = jwt.sign({
    _id: verifyUser._id
  }, 'secret' );


  return res.status(200).json({
    message: "Logged",
    token
  })
});

module.exports = router;