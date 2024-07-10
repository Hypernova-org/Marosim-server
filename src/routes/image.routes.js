const { Router } = require("express");
const imageController = require("../controller/image.controller.js");

const imageRoutes = Router();

imageRoutes.get("/", imageController.getAll);
imageRoutes.post("/", imageController.uploadImage);

module.exports = imageRoutes;