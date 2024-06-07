const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
require("dotenv").config();
const dotenv = require("dotenv");
const connectdb = require("./db/index");
const { default: mongoose, connect } = require("mongoose");
dotenv.config({
  path: "./env",
});
connectdb();
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("twitter");
});
app.get("/Login", (req, res) => {
  res.send("<h2>You are at the login route</h1>");
});
app.get("/movies", (req, res) => {
  const Movies = [
    {
      id: 1,
      title: "Conjuring",
      genre: "Horror",
      Lenght: "120 minutes",
    },
    {
      id: 2,
      title: "Conjuring 2",
      genre: "Horror",
      Lenght: "130 minutes",
    },
    {
      id: 3,
      title: "Annabele",
      genre: "Horror",
      Lenght: "110 minutes",
    },
    {
      id: 4,
      title: "SAW 10",
      genre: "Horror",
      Lenght: "90 minutes",
    },
    {
      id: 1,
      title: "Conjuring",
      genre: "Horror",
      Lenght: "120 minutes",
    },
  ];
  res.send(Movies);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
