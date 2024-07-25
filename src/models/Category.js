const { Schema, model } = require("mongoose");
const categorySchema = new Schema(
  {
    titleUz: {
      type: String,
      required: true,
    },
    titleRu: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Category = model("categories", categorySchema);
module.exports = Category;
