const mongoose = require("mongoose");
const filesSchema = new mongoose.Schema({
  fileName: {
    type: String,
  },
  fileId: {
    type: String,
  },
  fileUrl: {
    type: String,
  },
});
filesSchema.set("timestamps", true);
const Files = mongoose.model("images", filesSchema);
module.exports = Files;
