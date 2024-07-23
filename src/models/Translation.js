const { Schema, model } = require("mongoose");
const TranslationSchema = new Schema({
  message: {
    type: String,
  },
  uz: {
    type: String,
  },
  ru: {
    type: String,
  },
});

const Translations = model("translations", TranslationSchema);
module.exports = Translations;
