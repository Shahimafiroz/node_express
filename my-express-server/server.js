const exp = require("express");
var app = exp();

// respond req 1
app.get("/", function (req, res) {
  res.send("<h1>hello guys ... not happy to see u!!!</h1>");
  console.log(req);
});

app.get("/contact", function (req, res) {
  res.send("<h2> khanshahima4@gmail.com </h2>");
  console.log(req);
});

app.get("/about", function (req, res) {
  res.send(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  );
  console.log(req);
});

app.get("/contact/phone", function (req, res) {
  res.send("<h2> 8605410290 </h2>");
  console.log(req);
});

// // respond req 1
// app.get("/contact", function (request, respond) {
//   respond.send("u can contact me at : goodgirl86054@gmail.com");
// });

app.listen(3000, function () {
  console.log("server started on port 3000");
});
