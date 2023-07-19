const playlist = require("../models/playlist");

const PlaylistRepository = {
  addPlayCount: (id) => (playlist[id].playCount += 1),
  getAllSongsSortedDesc: () => {
    const newPlaylist = [...playlist];
    const sorted = newPlaylist.sort((a, b) => b.playCount - a.playCount);
    return sorted;
  },
};

module.exports = PlaylistRepository;
