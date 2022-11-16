class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    const intervalId = setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 1000);
    this.intervalId = intervalId;
  }

  getMinutes() {
    let minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return Math.floor(seconds);
  }

  computeTwoDigitNumber(value) {
    let string = value.toString();
    if (string.length === 1) return "0" + string;
    if (string.length === 2) return string;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let splitMinutes = this.computeTwoDigitNumber(this.getMinutes())
    let splitSeconds = this.computeTwoDigitNumber(this.getSeconds())
   
    return `${splitMinutes}:${splitSeconds}`; 
  }
}