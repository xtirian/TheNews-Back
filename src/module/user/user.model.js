const mongoose = require('../../config/mongo')
const {Schema} = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String
}, {
  timestaps: true} //mantem o registro do momento que o regitro foi criado ou atualizado.
  );

  

  module.exports = mongoose.model('users', userSchema);