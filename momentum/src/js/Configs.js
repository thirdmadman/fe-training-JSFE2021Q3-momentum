class Configs {
  constructor(className) {
    this.parentClassName = className;
    this.className = "configs";
    this.rooEl = document.getElementsByClassName(this.parentClassName)[0].getElementsByClassName(this.className)[0];
    document
      .getElementsByClassName(this.parentClassName)[0]
      .getElementsByClassName("button-configs")[0]
      .addEventListener("click", () => this.show(), false);
    this.rooEl.getElementsByClassName("configs__button-close")[0].addEventListener("click", () => this.hide(), false);

    this.hide();

    this.configData = null;
    this.defaultConfigData = {
      greetings: {
        name: "John Dove",
      },
      weatherForecast: {
        city: "New York",
      },
    };
  }

  hide() {
    this.rooEl.classList.add("configs_hidden");
  }

  show() {
    this.rooEl.classList.remove("configs_hidden");
    this.showIputsData();
  }

  showIputsData() {
    this.rooEl.getElementsByClassName("group-configs__input-text_name")[0].value = this.configData.greetings.name;
    this.rooEl.getElementsByClassName("group-configs__input-text_city")[0].value = this.configData.weatherForecast.city;
  }

  getIputsData() {
    try {
      this.configData.greetings.name = this.rooEl.getElementsByClassName("group-configs__input-text_name")[0].value;
      this.configData.weatherForecast.city = this.rooEl.getElementsByClassName("group-configs__input-text_city")[0].value;
    } catch (e) {
      localStorage.removeItem("momentumData");
      console.log("Due exeption localStorage have been cleared");
      this.loadData();
    }
  }

  loadData() {
    if (localStorage.getItem("momentumData")) {
      this.configData =
        Object.keys(JSON.parse(localStorage.getItem("momentumData"))).length > 0 ? JSON.parse(localStorage.getItem("momentumData")) : this.defaultConfigData;
    } else {
      this.configData = this.defaultConfigData;
    }
    console.log(this.configData);
    return this.configData;
  }

  save() {
    this.getIputsData();
    localStorage.setItem("momentumData", JSON.stringify(this.configData));
    console.log(localStorage.getItem("momentumData"));
  }
}
module.exports = Configs;
