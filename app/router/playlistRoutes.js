const express = require("express");
const PlaylistController = require("../controller/playlistController");

const router = express.Router();

router.post("/:id", PlaylistController.addPlayCount);
router.get("/", PlaylistController.getAllSongsSortedDesc);

module.exports = router;
