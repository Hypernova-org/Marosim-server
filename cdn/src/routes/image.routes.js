const { Router } = require("express");
const imageController = require("../controllers/image.controller.js");
const imageRoutes = Router();

imageRoutes.post("/upload", imageController.upload);
imageRoutes.get("/upload", imageController.getFiles);
imageRoutes.delete("/upload/:fileId", imageController.deleteFile);

module.exports = imageRoutes;