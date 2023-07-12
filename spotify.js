const express = require("express");
const app = express();
const PORT = 3002;

app.use(express.json());

const playlist = [];

app.post("/song", (req, res) => {
  const body = req.body;
  playlist.push(body);
  res.send("song added to the playlist");
});

app.get("/song", (req, res) => {
  res.send(playlist);
});

app.get("/song/:id", (req, res) => {
  const id = req.params.id;
  const result = playlist.filter((val, index) => id == index);
  //   console.log(result);
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
