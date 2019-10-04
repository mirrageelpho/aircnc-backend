const mongoose = require("mongoose");
/**
 * @description o parametro tech do objeto é uma array de strings
 *
 */
const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  location: String,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Spot", SpotSchema);
