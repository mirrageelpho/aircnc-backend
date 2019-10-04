const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  data: String,
  aproved: Boolean,
  available: {
      type: Boolean,
      default: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Spot"
  }
});

module.exports = mongoose.model("Booking", BookingSchema);
