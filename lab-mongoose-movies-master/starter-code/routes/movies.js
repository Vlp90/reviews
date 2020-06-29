const express = require("express");
const router = express.Router();
const Movies = require("../models/Movies");

// SEE ALL
router.get("/movies", (req, res, next) => {
  Movies.find()
    .then((dbRes) => {
      console.log(dbRes);
      res.render("movies/index.hbs", { allMovies: dbRes });
    })
    .catch((err) => {
      console.log(err);
    });
});

// ADD FORM
router.get("/movies/create", (req, res, next) => {
  res.render("movies/new");
});

// CREATE NEW
router.post("/movies", (req, res, next) => {
  const { title, genre, plot } = req.body;

  if (title === "" || genre === "" || plot === "") {
    return res.redirect("movies/create");
  }
  Movies.create({ title, genre, plot })
    .then((dbRes) => {
      res.redirect("/movies");
      console.log(dbRes);
    })
    .catch(next);
});

// SEE ONE
router.get("/movies/:id", (req, res, next) => {
  Movies.findById(req.params.id)
    .then((dbRes) => {
      res.render("movies/show.hbs", {
        movie: dbRes,
        title: "Movie Chosen",
      });
      console.log(dbRes);
    })
    .catch((err) => {
      console.log(err);
    });
});

// DELETE ONE
router.get("/movies/:id/delete", (req, res, next) => {
  Movies.findByIdAndRemove(req.params.id)
    .then((dbRes) => {
      res.redirect("/movies");
      console.log(dbRes);
    })
    .catch(next);
});

// EDIT ONE

router.get("/movies/:id/edit", (req, res, next) => {
  Movies.findById(req.params.id)
    .then((dbRes) => {
      res.render("movies/edit", {
        movie: dbRes,
      });
      // res.redirect("/celebrities");
      console.log(dbErr);
    })
    .catch((err) => {
      console.log(err);
    });
});

// POST EDITED ONE
router.post("/movies/:id/edit", (req, res, next) => {
  const { title, genre, plot } = req.body;

  if (title === "" || genre === "" || plot === "") {
    return res.redirect("/movies/edit");
  }

  Movies.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((dbRes) => {
      res.redirect("/movies");
      console.log(dbRes);
    })
    .catch(next);
});

module.exports = router;
