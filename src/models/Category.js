const { Schema, model } = require("mongoose");
const categorySchema = new Schema(
  {
    title: {
      type: String,
    },
    images: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Category = model("categories", categorySchema);
module.exports = Category;
