var express = require("express");
var exphbs = require("express-handlebars");
const tasks = require("./Tasks.js");
const path = require("path");

var app = express();

// Handlebars Middlewares
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) =>
  res.render("home", {
    title: "My Todo List",
    tasks,
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// app.get("/", (req, res) => res.send(members));
app.use("/api/tasks", require("./routes/api/tasks"));
app.use("/api/edit", require("./routes/api/edit"));
app.use("/api/delete", require("./routes/api/delete"));
app.use("/api/save", require("./routes/api/save"));
app.listen(3000);
