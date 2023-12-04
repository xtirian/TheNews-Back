import mongoose from "mongoose";

const NewsSchema = new Schema(
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

const NewsModel = mongoose.model("news", NewsSchema);

export default NewsModel;
