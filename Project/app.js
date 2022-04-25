const express = require("express");
const router = express.Router();
const app = express();
app.use(express.static("js"));
app.use(express.static("img"));
app.use(express.static("public"));
app.use(express.static("styles"));
app.listen(3001, (e) => {
  if (e) {
    throw e;
  } else {
    console.log("server is running");
  }
});

app.get("/", (req, res) => {
  // console.log(__dirname);
  res.sendFile(__dirname + "/static/home.html");
});

//routing for pattern
// app.get("/fruit/:somefruit", (req, res) => {
//   //   let { somefruit } = req.params;
//   console.log(req.params);
//   res.end();
// });
app.get("/little_project", (req, res) => {
  res.sendFile(__dirname + "/static/little_project.html");
});

app.get("/todolist", (req, res) => {
  res.sendFile(__dirname + "/static/todolist.html");
});
//routing for all
app.get("*", (req, res) => {
  res.send("Wrong URL");
});
