class WeatherForecast {
  constructor(className) {
    this.parentClassName = className;
    this.className = "weather-forecast";

    this.city = "Tolen";

    this.currentWeather = {
      error: "",
      air: "Clouds of disasters",
      temp: 1,
      hum: 35,
      pres: 748.9,
      windspeed: 10,
      winddir: "West",
    };

    this.upcomingWeather = {
      error: "",
      air: "Heavy rain of gore",
    };

    this.currentWeatherTitle = "Current weather:";
    this.upcomingWeatherTitle = "Upcoming weather:";

    this.rooEl = document.getElementsByClassName(this.parentClassName)[0].getElementsByClassName(this.className)[0];

    this.controlButtonsEl = document.getElementsByClassName('control-buttons')[0];

    this.rooEl.getElementsByClassName("weather-forecast__button-close")[0].addEventListener("click", () => this.hide());
    this.controlButtonsEl.getElementsByClassName("weather-forecast__button-open")[0].addEventListener("click", () => this.show());
    this.getCurrentWeather();
    this.getupcomingWeather();
    this.render();
  }

  checkCity() {}

  setCity(city) {
    this.city = city;

    this.getCurrentWeather();
    this.getupcomingWeather();
    this.render();
  }

  show() {
    this.controlButtonsEl.getElementsByClassName("weather-forecast__button-open")[0].classList.add("button-open_hidden");
    this.rooEl.getElementsByClassName("weather-forecast__overlay")[0].classList.remove("weather-forecast__overlay_hidden");
    this.rooEl.getElementsByClassName("weather-forecast__button-close")[0].classList.remove("weather-forecast__button-close_hidden");
  }

  hide() {
    this.rooEl.getElementsByClassName("weather-forecast__button-close")[0].classList.add("weather-forecast__button-close_hidden");
    this.rooEl.getElementsByClassName("weather-forecast__overlay")[0].classList.add("weather-forecast__overlay_hidden");
    this.controlButtonsEl.getElementsByClassName("weather-forecast__button-open")[0].classList.remove("button-open_hidden");
  }

  getCurrentWeather() {
    let url = "https://api.weatherapi.com/v1/current.json?key=f00cf593acf646ed8fa191758212710&q=" + this.city;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((currentWeatherData) => {
        if (currentWeatherData) {
          if (currentWeatherData.error && currentWeatherData.error.code === 1006) {
            this.currentWeather.error = currentWeatherData.error.message;
          } else {
            this.currentWeather.air = currentWeatherData.current.condition.text;
            this.currentWeather.temp = parseFloat(currentWeatherData.current.temp_c).toFixed(1);
            this.currentWeather.hum = parseFloat(currentWeatherData.current.humidity).toFixed(0);
            this.currentWeather.pres = (parseFloat(currentWeatherData.current.pressure_mb) * 0.750062).toFixed(2);
            this.currentWeather.windspeed = (parseFloat(currentWeatherData.current.wind_kph) / 3.6).toFixed(2);
            this.currentWeather.winddir = currentWeatherData.current.wind_dir;
            this.currentWeather.error = "";
          }
          this.render();
        }
      });
  }

  getupcomingWeather() {
    let url = "https://api.weatherapi.com/v1/forecast.json?key=f00cf593acf646ed8fa191758212710&q=" + this.city;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((weatherData) => {
        if (weatherData) {
          if (weatherData.error && weatherData.error.code === 1006) {
            this.upcomingWeather.error = weatherData.error.message;
          } else {
            this.upcomingWeather.air = weatherData.forecast.forecastday[0].hour[12].condition.text;
          }
          this.render();
        }
      });
  }

  render() {
    let container = this.rooEl.getElementsByClassName("weather-forecast__container")[0];
    container.innerHTML = "";

    let city = document.createElement("div");
    city.classList.add("weather-forecast__city");
    city.innerText = this.city;

    let currentWeatherBlock = document.createElement("div");
    currentWeatherBlock.classList.add("weather-forecast__weather-block");
    currentWeatherBlock.classList.add("weather-block");
    let currentWeatherBlockTitle = document.createElement("div");
    currentWeatherBlockTitle.classList.add("weather-block__title");
    currentWeatherBlockTitle.innerText = this.currentWeatherTitle;

    let currentWeatherBlockBody = document.createElement("div");
    currentWeatherBlockBody.classList.add("weather-block__body");

    if (this.currentWeather.error === "") {
      let air = document.createElement("p");
      air.innerText = this.currentWeather.air;
      let temp = document.createElement("p");
      temp.innerText = "Temperature: " + this.currentWeather.temp + " °C";
      let hum = document.createElement("p");
      hum.innerText = "Air humidity: " + this.currentWeather.hum + " %";
      let pres = document.createElement("p");
      pres.innerText = "Air pressure: " + this.currentWeather.pres + " mm Hg";
      let windspeed = document.createElement("p");
      windspeed.innerText = "Wind speed: " + this.currentWeather.windspeed + " m/s";
      let winddir = document.createElement("p");
      winddir.innerText = "Wind direction: " + this.currentWeather.winddir;

      currentWeatherBlockBody.appendChild(air);
      currentWeatherBlockBody.appendChild(temp);
      currentWeatherBlockBody.appendChild(hum);
      currentWeatherBlockBody.appendChild(pres);
      currentWeatherBlockBody.appendChild(windspeed);
      currentWeatherBlockBody.appendChild(winddir);
    } else {
      let error = document.createElement("p");
      error.innerText = this.currentWeather.error;
      currentWeatherBlockBody.appendChild(error);
    }

    let upcomingWeatherBlock = document.createElement("div");
    upcomingWeatherBlock.classList.add("weather-forecast__weather-block");
    upcomingWeatherBlock.classList.add("weather-block");
    let upcomingWeatherBlockTitle = document.createElement("div");
    upcomingWeatherBlockTitle.classList.add("weather-block__title");
    upcomingWeatherBlockTitle.innerText = this.upcomingWeatherTitle;

    let upcomingWeatherBlockBody = document.createElement("div");
    upcomingWeatherBlockBody.classList.add("weather-block__body");

    if (this.upcomingWeather.error === "") {
      let upcomingAir = document.createElement("p");
      upcomingAir.innerText = this.upcomingWeather.air;

      upcomingWeatherBlockBody.appendChild(upcomingAir);
    } else {
      let error = document.createElement("p");
      error.innerText = this.upcomingWeather.error;

      upcomingWeatherBlockBody.appendChild(error);
    }

    currentWeatherBlock.appendChild(currentWeatherBlockTitle);
    currentWeatherBlock.appendChild(currentWeatherBlockBody);

    upcomingWeatherBlock.appendChild(upcomingWeatherBlockTitle);
    upcomingWeatherBlock.appendChild(upcomingWeatherBlockBody);

    container.appendChild(city);
    container.appendChild(currentWeatherBlock);
    container.appendChild(upcomingWeatherBlock);
  }
}
module.exports = WeatherForecast;
