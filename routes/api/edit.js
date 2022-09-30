const express = require("express");
const router = express.Router();
const tasks = require("../../Tasks");

router.post("/:id", (req, res) => {
  let currentId = parseInt(req.params.id);
  res.render("edit", {
    title: "My Todo List",
    tasks: tasks.map((v) => {
      return { ...v, selected: v.id === currentId };
    }),
    currentId,
  });
});

module.exports = router;
