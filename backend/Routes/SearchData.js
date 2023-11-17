const express = require("express");
const router = express.Router();
const notes = require("../Notes");

router.get("/query", async (req, res) => {
  const { search } = req.query;
  if (search) {
    // const filter = { tag: search };
    // res.send(filter);
    const data = await notes.find({ tag: search }).exec();
    res.send(data);
  }
});

module.exports = router;
