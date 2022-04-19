const express = require("express");
const router = express.Router();
const app = express();

app.listen(3001, (e) => {
  if (e) {
    throw e;
  } else {
    console.log("server is running");
  }
});

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/TEST.html");
});

//routing for pattern
// app.get("/fruit/:somefruit", (req, res) => {
//   //   let { somefruit } = req.params;
//   console.log(req.params);
//   res.end();
// });

//routing for all
app.get("*", (req, res) => {
  res.send("Wrong URL");
});
