const mongoose = require('../../config/mongo')
const {Schema} = mongoose;


const newsSchema = new Schema(
  {
    nome: String,
    imgURL: String,
    title: String,
    content: String,
    description: String,
    originalNews: String,
    author: String,
    date: String,
    NewsFrom: String,
  },
  {
    timestaps: true,
  } //mantem o registro do momento que o regitro foi criado ou atualizado.
);

module.exports = mongoose.model("news", newsSchema);
