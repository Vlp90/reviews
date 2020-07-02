const express = require("express");
const router = express.Router();

// PROTECTED PAGE
// const isAuth = require("../middlewares/requireAdmin");
// const isAuthorized = require("../middlewares/requireAuth");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/", (req, res, next) => {
  res.render("index");
});



module.exports = router;
