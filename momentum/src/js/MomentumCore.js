const MomentumClock = require("./MomentumClock.js");
const BackgroundProvider = require("./BackgroundProvider.js");
const MusicPlayer = require("./MusicPlayer.js");
const DayQuote = require("./DayQuote.js");
const WeatherForecast = require("./WeatherForecast.js");
const Greetings = require("./Greetings.js");

const defaultQuotes = require("./defaultQuotes.json");
class MomentumCore {
  constructor(className) {
    this.className = className;
    this.greetings = new Greetings(this.className);
    this.clock = new MomentumClock(this.className);
    this.backgroundProvider = new BackgroundProvider();
    this.musicPlayer = new MusicPlayer(this.className);
    this.dayQuote = new DayQuote(this.className);
    if (defaultQuotes) {
      this.dayQuote.setQuotesArray(defaultQuotes);
    }

    this.weatherForecast = new WeatherForecast(this.className);

    this.timeTracker();
  }

  timeTracker() {
    let hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      this.greetings.setGreetingsText("Good morning,");
    } else if (hour >= 12 && hour < 18) {
      this.greetings.setGreetingsText("Good afternoon,");
    } else if (hour >= 18 && hour < 24) {
      this.greetings.setGreetingsText("Good evening,");
    } else if (hour >= 0 && hour < 6) {
      this.greetings.setGreetingsText("Good night,");
    }

  }

  addPlaylist(songsArray) {
    this.musicPlayer.setPlayList(songsArray);
  }
}
module.exports = MomentumCore;
