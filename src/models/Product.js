const { Schema, Types, model } = require("mongoose");
const productSchema = new Schema(
  {
    titleUz: {
      type: String,
      required: true,
    },
    titleRu: {
      type: String,
      required: true,
    },
    titleKr: {
      type: String,
      required: true,
    },
    descriptionUz: {
      type: String,
      required: true,
    },
    descriptionRu: {
      type: String,
      required: true,
    },
    descriptionKr: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: Types.ObjectId,
      ref: "categories",
      required: true,
    },
    gender: {
      type: Boolean,
    },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        id: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Product = model("products", productSchema);
module.exports = Product;
