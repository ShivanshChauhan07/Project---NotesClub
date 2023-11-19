const { Schema, default: mongoose } = require("mongoose");

const fileUploadSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  university: {
    type: String,
  },
  branch: {
    type: String,
  },
  subject: {
    type: String,
  },
  pdf: {
    type: String,
  },
});

module.exports = mongoose.model("uploadNotes", fileUploadSchema);
