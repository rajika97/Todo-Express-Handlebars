const express = require("express");
const router = express.Router();
const tasks = require("../../Tasks");

// const idFilter = req => task => task.id === parseInt(req.params.id);

router.post("/", (req, res) => {
  if (req.body.task !== "") {
    const taskId = tasks.length;
    const newTask = {
      id: taskId + 1,
      text: req.body.task,
    };
    tasks.push(newTask);
    res.redirect("/");
  } else {
    res.redirect("/");
    res.send(console.log("Please Fill out the task"));
  }
});

module.exports = router;
