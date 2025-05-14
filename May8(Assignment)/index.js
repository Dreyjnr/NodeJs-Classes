const express = require("express");
const app = express();
require("ejs");
app.set("view engine", "ejs");
app.get("/signup", (request, response) => {
  response.render("index");
});
const port = 5004;
app.listen(port, () => {
  console.log("app started");
});
