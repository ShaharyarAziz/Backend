const express = require("express");
require("dotenv").config();
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("twitter");
});
app.get("/Login", (req, res) => {
  res.send("<h2>You are at the login route</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
