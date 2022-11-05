const exp = require("express");
var app = exp();

// respond req 1
app.get("/", function (request, respond) {
  respond.send("hello guys ... not happy to see u!!!");
});

// // respond req 1
// app.get("/contact", function (request, respond) {
//   respond.send("u can contact me at : goodgirl86054@gmail.com");
// });

app.listen(3000, function () {
  console.log("server started on port 3000");
});
