const { Router } = require("express");
const userRoutes = require("./user.routes.js");
const productRoutes = require("./product.routes.js");
const categoryRoutes = require("./category.routes.js");
const translationRoutes = require("./translation.routes.js");
const router = Router();

router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/translations", translationRoutes);

module.exports = router;
