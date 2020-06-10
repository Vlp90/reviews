class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
      if (callback) {
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  twoDigitsNumber(number) {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number.toString();
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    const formatedMinutes = this.twoDigitsNumber(this.getMinutes());
    const formatedSeconds = this.twoDigitsNumber(this.getSeconds());

   return `${formatedMinutes}:${formatedSeconds}`;
    
  }
}

const test = new Chronometer();
console.log(test);
