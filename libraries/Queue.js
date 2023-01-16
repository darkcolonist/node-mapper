class Queue {
  constructor(concurrency = 1) {
    this.items = [];
    this.concurrency = concurrency;
    this.running = 0;
  }

  async add(fn) {
    this.items.push(fn);
    this.next();
  }

  async next() {
    while (this.running < this.concurrency && this.items.length) {
      const fn = this.items.shift();
      this.running++;
      try {
        await fn();
      } catch (err) {
        console.error(err);
      } finally {
        this.running--;
        this.next();
      }
    }
  }
}

module.exports = Queue;