const express = require("express");
const app = express();
const port = 5000;

const verifdate = (req, res, next) => {
  const date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return res.send("date non valide");
  }
  if (date.getHours() < 9 || date.getHours() > 18) {
    return res.send("heure non valide");
  }
  next();
};
app.use(verifdate);
app.use(express.static("Public"));
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/Public/Home.html");
// });
// app.get("/service", (req, res) => {
//   res.sendFile(__dirname + "/Public/Services.html");
// });
// app.get("/contacter", (req, res) => {
//   res.sendFile(__dirname + "/Public/Contact.html");
// });

app.listen(port, () => {
  console.log("server is running in port " + port);
});
