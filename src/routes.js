function routes(app) {
  app.use('/users', require("./routes/users.js"));
  app.use('/news', require("./routes/news.js"));
  return;
}

module.exports = routes;