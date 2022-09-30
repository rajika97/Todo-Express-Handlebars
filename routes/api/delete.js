const express = require("express");
const router = express.Router();
const tasks = require("../../Tasks");

// const idFilter = req => task => task.id === parseInt(req.params.id);

router.post("/:id", (req, res) => {
  let currentId = parseInt(req.params.id);
  tasks.forEach((element) => {
    if (element.id == currentId) {
      tasks.splice(currentId - 1, 1);
      res.redirect("/");
      return;
    }
  });
});

module.exports = router;
