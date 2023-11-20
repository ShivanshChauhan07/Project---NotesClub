const express = require("express");
const router = express.Router();
const multer = require("multer");
const uploadNotes = require("../modal/FileUpload");
const cloudinary = require("../utils/cloudinary");

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("avatar"), async (req, res) => {
  const data = JSON.parse(req.body.uploadUser);
  const { name, email, university, branch, subject } = data;
  const pdfName = req.file.filename;
  cloudinary.uploader.upload(req.file.path, function (err, result) {
    if (err) {
      console.log(err);
      return res.status(400).json({
        message: "Error",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "uploaded",
        data: result,
      });
    }
  });
  // try {
  //   uploadNotes.create({
  //     name: name,
  //     email: email,
  //     university: university,
  //     branch: branch,
  //     subject: subject,
  //     pdf: pdfName,
  //   });
  //   res.status(200).json({ message: "ok" });
  // } catch (error) {}
});

module.exports = router;
