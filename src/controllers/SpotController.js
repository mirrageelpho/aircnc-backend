const Spot = require("../models/Spot");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const { tech } = req.query;
    let spots;
    if (!tech) {
        spots = await Spot.find();
    }else{
        spots = await Spot.find({ techs: tech });
    }
    return res.json(spots);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { userid } = req.headers;
    const user = await User.findById(userid);

    if (!user) return res.status(400).json({ error: "User not found" });

    const spot = await Spot.create({
      user: userid,
      thumbnail: filename,
      company: req.body.company,
      techs: req.body.techs.split(",").map(tech => tech.trim()), //quebra a sting em array e remove os espaços em branco
      price: req.body.price,
      location: req.body.location
    });

    return res.json(spot);
  }
};
