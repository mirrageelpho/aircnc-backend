const Booking = require("../models/Booking");

module.exports = {
  async store(req, res) {
    const { userid } = req.headers;
    const { spot_id } = req.params;
    const { data } = req.body;
    const booking = await Booking.create({ data, user: userid, spot: spot_id });

    await booking
      .populate("user")
      .populate("spot")
      .execPopulate();

    return res.json(booking);
  }
};
