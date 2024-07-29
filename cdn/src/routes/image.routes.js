const { Router } = require("express");
const imageController = require("../controllers/image.controller.js");
const imageRoutes = Router();

imageRoutes.post("/upload", imageController.upload);

module.exports = imageRoutes;