const PlaylistRepository = require("../repository/playlistRepository");

const PlaylistService = {
  addPlayCount: (id) => {
    return PlaylistRepository.addPlayCount(id);
  },
  getAllSongsSortedDesc: () => {
    return PlaylistRepository.getAllSongsSortedDesc();
  },
};

module.exports = PlaylistService;
