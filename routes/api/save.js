const express = require("express");
const router = express.Router();
const tasks = require("../../Tasks");

router.post("/:id", (req, res) => {
  let currentId = parseInt(req.params.id);
  const newText = req.body.save;
  tasks.forEach((element) => {
    if (element.id == currentId) {
      element.text = newText;
      res.redirect("/");
      return;
    }
  });
});

module.exports = router;
