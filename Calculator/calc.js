const exp = require("express");
const app = exp();

app.get("/", function (req, res) {
  res.send("hello World ");
});

app.listen(3000, function () {
  console.log("server is running ");
});
