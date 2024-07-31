const { v1: uuidv4 } = require("uuid");
const path = require("path");
const multer = require("multer");
const Files = require("../models/Image.js");

exports.getFiles = async (req, res) => {
  try {
    const files = await Files.find();
    return res.status(200).json({
      message: "Files fetched",
      status: 200,
      data: files,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteFile = async (req, res) => {
  try {
    const fileId = req.params.fileId;
    const file = await Files.findOne({
      fileId,
    });
    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }
    await Files.findByIdAndDelete(file._id);
    return res.status(200).json({
      message: "File deleted",
      status: 200,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.upload = async (req, res) => {
  try {
    const publicFolderPath = `./uploads`;
    const storage = multer.diskStorage({
      destination: publicFolderPath,
      filename: (req, file, cb) => {
        const fileId = uuidv4();
        const fileExtension = path.extname(file.originalname);
        const fileName = `${fileId}${fileExtension}`;
        cb(null, fileName);
      },
    });
    const upload = multer({ storage }).single("images");
    upload(req, res, async (err) => {
      if (err) {
        console.error("Error handling file upload:", err);
        return res.status(500).json({ message: "Error uploading the file" });
      }
      if (!req.file) {
        return res.status(400).json({ message: "No file provided" });
      }
      const fileName = req.file.filename;
      const fileId = path.basename(
        req.file.filename,
        path.extname(req.file.filename)
      );
      const fileUrl = `https://cdn.waqt.uz/uploads/${fileName}`;
      const files = await Files.create({
        fileName,
        fileId,
        fileUrl,
      });
      await files.save();
      return res.status(200).json({
        message: "File uploaded",
        status: 200,
        data: files,
      });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
