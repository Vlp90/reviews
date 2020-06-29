const mongoose = require("mongoose");
const Celebrities = require("../models/Celebrity");

const chosenCelebrities = [
  {
    name: "Dracula",
    occupation: "Roi des morts",
    catchPhrase: "Dead or not, here i come",
  },
  {
    name: "Britney Spears",
    occupation: "Singer",
    catchPhrase: "Baby one more time",
  },
  {
    name: "Nekfeu",
    occupation: "Singer",
    catchPhrase: "Met le coco et on demarre",
  },
];

mongoose
  .connect("mongodb://localhost/starter-code", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    Celebrities.create(chosenCelebrities)
      .then((dbRes) => {
        console.log(dbRes);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

module.exports = chosenCelebrities;

