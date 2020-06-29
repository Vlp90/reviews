const mongoose = require("mongoose");
const Celebrities = require("../models/Celebrity");
const Movies = require("../models/Movies")

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

const chosenMovies = [
  { title: "Insidious", genre: "Horror", plot: "Be carful of the demons" },
  { title: "Indiana Jones", genre: "Aventure", plot: "Be awre of the traps" },
  { title: "Matrix", genre: "Sci-Fi", plot: "Red or blue pill ?" },
];

// mongoose
//   .connect("mongodb://localhost/starter-code", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((x) => {
//     Celebrities.create(chosenCelebrities)
//       .then((dbRes) => {
//         console.log(dbRes);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     console.log(
//       `Connected to Mongo! Database name: "${x.connections[0].name}"`
//     );
//   })
//   .catch((err) => {
//     console.error("Error connecting to mongo", err);
//   });

mongoose
  .connect("mongodb://localhost/starter-code", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    Movies.create(chosenMovies)
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

// module.exports = chosenCelebrities;
module.exports = chosenMovies;