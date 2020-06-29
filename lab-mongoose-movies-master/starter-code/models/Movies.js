var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var moviesSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
});

const Movies = mongoose.model("moviesDATA", moviesSchema);
module.exports = Movies;
