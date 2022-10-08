class MomentumClock {
  constructor(className) {
    this.parentClassName = className;
    this.className = "date-time";

    this.rooEl = document.getElementsByClassName(this.parentClassName)[0].getElementsByClassName(this.className)[0];
    this.timeEl = this.rooEl.getElementsByClassName("date-time__time")[0];
    this.dateEl = this.rooEl.getElementsByClassName("date-time__date")[0];
    this.isActive = true;

    this.is12hourTimeFormat = false;
    this.locales = "en-US";

    this.updateTime();
  }

  updateTime() {
    let date = new Date();
    let dateOptions = { weekday: "long", month: "long", day: "numeric" };
    let timeOptions = { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: this.is12hourTimeFormat };

    
    this.dateEl.innerHTML = date.toLocaleString(this.locales, dateOptions);
    this.timeEl.innerHTML = date.toLocaleString(this.locales, timeOptions);
    if (this.isActive) {
      setTimeout(() => this.updateTime(), 1000);
    }
  }
}
module.exports = MomentumClock;
