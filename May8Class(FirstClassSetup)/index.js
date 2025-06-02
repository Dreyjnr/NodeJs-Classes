const express = require("express");
const app = express();
require("ejs");
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  //   response.send("Welcome to NodeJS Class");
  response.render("index", { name: "Shola", gender: "Male" });
});

app.get("/user", (request, response) => {
  //   response.send("This is my Classwork");
  response.json({
    user: [
      { name: "Lola", class: "React" },
      { name: "Shola", class: "NodeJs" },
      { name: "Tobi", class: "Angular" },
    ],
  });
});

const port = 5004;

app.listen(port, () => {
  console.log("app started");
});
