const MomentumClock = require("./MomentumClock.js");
const BackgroundProvider = require("./BackgroundProvider.js");
const MusicPlayer = require("./MusicPlayer.js");
const DayQuote = require("./DayQuote.js");
const WeatherForecast = require("./WeatherForecast.js");
const Greetings = require("./Greetings.js");
const Configs = require("./Configs.js");

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
    this.configs = new Configs(this.className);
    this.configData = this.configs.loadData();

    this.setConfigs();

    document.getElementsByClassName(this.className)[0]
      .getElementsByClassName("configs__button-save")[0]
      .addEventListener(
        "click",
        () => {
          this.configs.save();
          this.configData = this.configs.loadData();
          this.setConfigs();
        },
        false
      );
  }

  addPlaylist(songsArray) {
    this.musicPlayer.setPlayList(songsArray);
  }

  setConfigs() {
    if (this.configData) {
      this.greetings.setUserName(this.configData.greetings.name);
      this.weatherForecast.setCity(this.configData.weatherForecast.city);
    }
    console.log("set");
  }
}
module.exports = MomentumCore;
