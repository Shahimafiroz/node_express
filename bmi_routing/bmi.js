var exp = require("express");
var bp = require("body-parser");

var app = exp();
app.use(bp.urlencoded({ extended: true }));

app.get("/", function (rq, rs) {
  rs.sendFile(__dirname + "/index.html");
});
app.post("/", function (rq, rs) {
  console.log(rq.body);
  var h = rq.body.h;
  var w = rq.body.w;
  var bmi = w / (h * h);
  rs.send("ur bmi is " + bmi);
  // rs.sendFile(__dirname + "/table.html" + "ur bmi is " + bmi);
});
app.listen(3000, function () {
  console.log("SERVER RUNNING ON PORT 3000");
});
