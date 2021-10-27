const MomentumClock = require("./MomentumClock.js");
const BackgroundProvider = require("./BackgroundProvider.js");
const MusicPlayer = require("./MusicPlayer.js");
class MomentumCore {
  constructor(className) {
    this.className = className;

    this.clock = new MomentumClock(this.className);
    this.backgroundProvider = new BackgroundProvider();
    this.musicPlayer = new MusicPlayer(this.className);
  }

  addPlaylist(songsArray) {
    this.musicPlayer.setPlayList(songsArray);
  }
}
module.exports = MomentumCore;
