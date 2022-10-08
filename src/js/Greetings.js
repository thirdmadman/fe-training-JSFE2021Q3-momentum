class Greetings {
  constructor(className) {
    this.parentClassName = className;
    this.className = "greetings";
    this.rooEl = document.getElementsByClassName(this.parentClassName)[0].getElementsByClassName(this.className)[0];
    this.show();
    setTimeout(() => this.hide(), 3000);
    this.rooEl.addEventListener("click", () => this.hide(), false);

    this.userName = "John Dove";
    this.greetingsText = "Hello there,";
    this.render();
  }

  setUserName(text) {
    this.userName = text;
    this.render();
  }

  timeTracker() {
    let hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      this.greetingsText = "Good morning,";
    } else if (hour >= 12 && hour < 18) {
      this.greetingsText = "Good afternoon,";
    } else if (hour >= 18 && hour < 24) {
      this.greetingsText = "Good evening,";
    } else if (hour >= 0 && hour < 6) {
      this.greetingsText = "Good night,";
    }
  }

  setGreetingsText(text) {
    this.greetingsText = text;
    this.render();
  }

  render() {
    this.timeTracker();

    let greetingsText = this.rooEl.getElementsByClassName("greetings__text")[0];
    let greetingsUserName = this.rooEl.getElementsByClassName("greetings__name")[0];

    greetingsText.innerText = this.greetingsText;
    greetingsUserName.innerText = this.userName;
  }

  hide() {
    this.rooEl.classList.add("greetings_hidden");
  }
  show() {
    this.rooEl.classList.remove("greetings_hidden");
  }
}
module.exports = Greetings;
