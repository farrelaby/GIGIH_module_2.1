const PlaylistService = require("../service/playlistService");

const PlaylistController = {
  addPlayCount: (req, res) => {
    const id = req.params.id;
    PlaylistService.addPlayCount(id);
    return res.status(200).send("Playcount added");
  },
  getAllSongsSortedDesc: (req, res) => {
    const songsSortedDesc = PlaylistService.getAllSongsSortedDesc();
    return res.send(songsSortedDesc);
  },
};

module.exports = PlaylistController;
