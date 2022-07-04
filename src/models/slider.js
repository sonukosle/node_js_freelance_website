const mongoose = require("mongoose");
const Slider = mongoose.Schema({
  title: String,
  sub_title: String,
  image_url: String,
  class: String
});

module.exports = mongoose.model("slider", Slider);
