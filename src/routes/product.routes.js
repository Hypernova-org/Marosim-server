const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const productController = require("../controllers/product.controller.js");
const productRoutes = Router();

productRoutes.get("/", productController.getAllProduct);
productRoutes.get("/:productId", productController.getProductById);
productRoutes.post("/", authMiddleware, productController.createProduct);
productRoutes.put(
  "/:productId",
  authMiddleware,
  productController.updateProduct
);
productRoutes.delete(
  "/:productId",
  authMiddleware,
  productController.deleteProduct
);

module.exports = productRoutes;
