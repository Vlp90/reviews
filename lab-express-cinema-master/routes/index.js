const express = require("express");
const router = express.Router();
const Movies = require("../models/movieModel");
const { db } = require("../models/movieModel");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movies.find()
    .then((dbRes) => {
      res.render("movies", {
        movies: dbRes,
      });
      //   console.log(dbRes);
    })
    .catch((err) => {
      // console.log(err);
    });
});

router.get("/movie/:id", (req, res) => {
  Movies.findById(req.params.id)
    .then((debResponse) => {
      res.render("movieID", {
        movieID: debResponse,
      });
    })
    .catch((error) => console.log(error));
});

module.exports = router;
