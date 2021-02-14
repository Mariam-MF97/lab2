let range = {
  start: 1,
  end: 10,

  [Symbol.iterator]() {
    this.current = this.start;
    return this;
  },

  next() {
    if (this.current <= this.end) {
      return {
        done: false,
        value: this.current++,
      };
    } else {
      return {
        done: true,
      };
    }
  },
};
for (currentNum of range) {
  console.log(currentNum);
}
