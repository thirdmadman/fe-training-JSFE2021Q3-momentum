const MomentumClock = require("./MomentumClock.js");
const BackgroundProvider = require("./BackgroundProvider.js");
const MusicPlayer = require("./MusicPlayer.js");
const DayQuote = require("./DayQuote.js");

const defaultQuotes = require("./defaultQuotes.json");
class MomentumCore {
  constructor(className) {
    this.className = className;

    this.clock = new MomentumClock(this.className);
    this.backgroundProvider = new BackgroundProvider();
    this.musicPlayer = new MusicPlayer(this.className);
    this.dayQuote = new DayQuote(this.className);
    if (defaultQuotes) {
      this.dayQuote.setQuotesArray(defaultQuotes);
    }

  }

  addPlaylist(songsArray) {
    this.musicPlayer.setPlayList(songsArray);
  }
}
module.exports = MomentumCore;
