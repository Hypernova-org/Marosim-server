const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  images: {
    type: Array,
  },
});

const Image = mongoose.model("images", ImageSchema);
module.exports = Image;
