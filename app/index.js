const express = require("express");

const app = express();
const router = require("./router/playlistRoutes");

app.use(router);

module.exports = app;
