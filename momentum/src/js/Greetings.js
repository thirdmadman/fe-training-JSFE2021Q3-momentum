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

  setUsernName(text) {
    this.userName = text;
    this.render();
  }

  setGreetingsText(text) {
    this.greetingsText = text;
    this.render();
  }

  render() {
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
