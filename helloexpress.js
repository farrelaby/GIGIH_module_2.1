const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.status(200).send({ msg: "Hello" });
});

app.use((req, res) => {
  res.status(400).send("404 Not Found");
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
