class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    if (this.max === this.min) {
      return this.half;
    } else {
      return (this.half = this.min + Math.round((this.max - this.min) / 2));
    }
  }

  lower() {
    this.max = this.half;
  }

  greater() {
    this.min = this.half;
  }
}

module.exports = GuessingGame;
