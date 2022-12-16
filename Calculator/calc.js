const exp = require("express");

const bodyp = require("body-parser");
const app = exp();
app.use(bodyp.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  console.log(req.body);
  var no1 = Number(req.body.num1);
  var no2 = Number(req.body.num2);
  var rese = no1 + no2;
  res.send("Result is " + rese);
});

app.listen(3000, function () {
  console.log("server is running ");
});
