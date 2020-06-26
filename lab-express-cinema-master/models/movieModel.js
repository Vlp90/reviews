var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var moviesSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

const Movies = mongoose.model("MovieDATA", moviesSchema);

module.exports = Movies;
