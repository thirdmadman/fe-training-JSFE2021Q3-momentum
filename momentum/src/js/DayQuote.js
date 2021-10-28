class DayQuote {
  constructor(className) {
    this.parentClassName = className;
    this.className = "day-quote";

    this.defaultTitle = "Quote of the day by ";
    this.defaultTitleWithRemimnder = "Quote of the day (click for update) ";

    this.quotesArray = [{ authorName: "No one", text: "You will never know what on the bottom of abyss, until you actually fall on this bottom" }];
    this.currentQuoteId = 0;

    this.rooEl = document.getElementsByClassName(this.parentClassName)[0].getElementsByClassName(this.className)[0];
    this.rooEl.getElementsByClassName("day-quote__text")[0].addEventListener("click", () => this.nextQuote());

    this.render(true);
  }

  setQuotesArray(quotesArray) {
    this.quotesArray = quotesArray;
    this.render(true);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render(isFirstTime) {
    let authorName = "";

    this.currentQuoteId = this.getRandomInt(0, this.quotesArray.length);
    if (isFirstTime) {
      authorName = this.defaultTitleWithRemimnder;
    } else {
      authorName = this.defaultTitle + this.quotesArray[this.currentQuoteId].authorName;
    }
    this.rooEl.getElementsByClassName("day-quote__title")[0].innerText = authorName;
    this.rooEl.getElementsByClassName("day-quote__text")[0].innerText = this.quotesArray[this.currentQuoteId].text;
  }

  nextQuote() {
    if (this.quotesArray.length > 1 && this.quotesArray.length - 1 > this.currentQuoteId) {
      this.currentQuoteId++;
    } else {
      this.currentQuoteId = 0;
    }
    console.log(this.currentQuoteId)
    console.log(this.quotesArray)
    this.render();
  }
}
module.exports = DayQuote;
