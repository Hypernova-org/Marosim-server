const Images = require("../models/Image.js");

exports.getAll = async (req, res) => {
  try {
    const images = await Images.find();
    return res.json({
      data: images,
    });
  } catch (err) {
    return res.status(400).json({
      message: "Interval server error!",
      error: err.message,
    });
  }
};

exports.uploadImage = async (req, res) => {
  try {
    const images = req.images;
    if (images.length == 0) {
      return res.status(400).json({
        message: "Eng kamida 1 ta surat bo'lishi kerak!",
      });
    }
    const newImage = new Images({
      images: req.images,
    });
    await newImage.save();
    return res.json({
      id: newImage._doc._id,
    });
  } catch (err) {
    return res.status(400).json({
      message: "Interval server error!",
      error: err.message,
    });
  }
};