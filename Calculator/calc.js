const exp = require("express");
const app = exp();
const bodyp = require("body-parser");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  res.send("hbxcjdh");
});

app.listen(3000, function () {
  console.log("server is running ");
});
