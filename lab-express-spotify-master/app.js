require("dotenv").config();

const express = require("express");
const hbs = require("hbs");

// require spotify-web-api-node package here:

const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

// setting the spotify-api goes here:

// Our routes go here:

app.get("/", (req, res) => res.render("index.hbs"));

app.listen(5000, () =>
  console.log("My Spotify project running on port 5000 🎧 🥁 🎸 🔊")
);
