require("dotenv").config();

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
}, {
  toJSON: {
    virtuals: true
  }
});

SpotSchema.virtual('thumbnail_url').get(function (){
  let url = process.env.URL || 'http://localhost:3333';
  return url+'/files/'+this.thumbnail;
})

module.exports = mongoose.model("Spot", SpotSchema);
