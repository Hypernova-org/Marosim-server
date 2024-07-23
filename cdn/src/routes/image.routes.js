const { Router } = require("express");
const imageController = require("../controllers/image.controller.js");
const imageRoutes = Router();

imageRoutes.get("/upload", imageController.getAll);
imageRoutes.post("/upload", imageController.uploadImage);
imageRoutes.delete("/upload/:id", imageController.deleteImage);

module.exports = imageRoutes;