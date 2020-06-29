var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const Celebrities = mongoose.model("celebritiesDATA", celebritySchema);
module.exports = Celebrities;
