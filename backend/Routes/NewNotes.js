const express = require("express");
const router = express.Router();
const Notes = require("../modal/Notes");

router.post("/", (req, res) => {
  console.log(req.body);
  const note = Notes(req.body);
  note.save();
  res.send(req.body);
});

module.exports = router;
