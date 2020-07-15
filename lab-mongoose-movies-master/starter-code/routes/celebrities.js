const express = require("express");
const router = express.Router();
const Celebrities = require("../models/Celebrity");
const { db } = require("../models/Celebrity");

// SEE ALL
router.get("/celebrities", (req, res, next) => {
  Celebrities.find()
    .then((dbRes) => {
      console.log(dbRes);
      res.render("celebrities/index.hbs", { allCelebrities: dbRes });
    })
    .catch((err) => {
      console.log(err);
    });
});

// ADD FORM
router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new");
});

// CREATE NEW
router.post("/test", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  if (name === "" || occupation === "" || catchPhrase === "") {
    return res.redirect("celebrities/create");
  }

  Celebrities.create({ name, occupation, catchPhrase })
    .then((dbRes) => {
      res.redirect("/celebrities");
      console.log(dbRes);
    })
    .catch((err) => {
      console.log(err);
    });
});

// SEE ONE

router.get("/celebrities/:id", (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then((dbRes) => {
      res.render("celebrities/show.hbs", {
        celebrity: dbRes,
        title: "Celebrity Chosen",
      });
      console.log(dbRes);
    })
    .catch((err) => {
      console.log(err);
    });
});

// DELETE ONE

router.get("/celebrities/:id/delete", (req, res, next) => {
  Celebrities.findByIdAndRemove(req.params.id)
    .then((dbRes) => {
      res.redirect("/celebrities");
      console.log(dbRes);
    })
    .catch(next);
});

// EDIT ONE

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then((dbRes) => {
      res.render("celebrities/edit", {
        celebrity: dbRes,
      });
      // res.redirect("/celebrities");
      console.log(dbErr);
    })
    .catch((err) => {
      console.log(err);
    });
});

// POST EDITED ONE
router.post("/celebrities/:id/edit", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  if (name === "" || occupation === "" || catchPhrase === "") {
    return res.redirect("/celebrities/edit");
  }

  Celebrities.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((dbRes) => {
      res.redirect("/celebrities");
      console.log(dbRes);
    })
    .catch(next);
});

module.exports = router;
