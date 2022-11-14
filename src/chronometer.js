class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {} // didn't get what to do 
  

  getMinutes() {
    let minutes = this.currentTime / 60
    return Math.floor(minutes)
  }

  getSeconds() {
    let seconds = this.currentTime % 60
    return Math.floor(seconds)
  }

  computeTwoDigitNumber(value) {
    let string = value.toString()
    if (string.length === 1) return "0" + string
    if (string.length === 2) return string
  }

  stop() {
    clearInterval (this.intervalId)
  }

  reset() {
    this.currentTime= 0  
}

  split() {
    // ... your code goes here
    let splitMinutes = this.computeTwoDigitNumber(this.getMinutes)
    let splitSeconds = this.computeTwoDigitNumber(this.getSeconds)

    return `${this.splitMinutes}:${this.splitSeconds}` // not working    
  }
}