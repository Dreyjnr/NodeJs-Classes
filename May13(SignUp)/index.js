const express = require("express");
const app = express();
require("ejs");
app.set("view engine", "ejs");
app.use(express.urlencoded());
let userArray = [];

app.get("/", (request, response) => {
  response.send("Welcome to your dashboard");
});
app.get("/signup", (request, response) => {
  response.render("signup");
});
app.get("/login", (request, response) => {
  response.render("login");
});

app.post("/user/signup", (request, response) => {
  console.log(request.body);
  userArray.push(request.body);
  console.log(userArray);
  response.redirect("/login");
});

app.post("/user/login", (request, response) => {
  console.log(request.body);
  const existUser = userArray.find(
    (user) => user.username === request.body.username
  );
  console.log(existUser);
  if (existUser && existUser.password == request.body.password) {
    console.log("Login successful");
    response.redirect("/");
  } else {
    console.log("Invalid user");
    response.redirect("/login");
  }
});

const port = 5004;
app.listen(port, () => {
  console.log("app started");
});
