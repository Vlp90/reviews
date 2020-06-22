class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function (a, b) {
      return a - b;
    });
  }

  get(pos) {
    const element = this.items[pos];
    if (element) {
      return element;
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("No values in array");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
