class FreqStack {
  freq: Record<number, number>;
  stackOfStacks: number[][];

  constructor() {
    this.freq = {};
    this.stackOfStacks = [];
  }

  push(x: number): void {
    if (!this.freq[x]) {
      this.freq[x] = 0;
    }

    let xFreq: number = this.freq[x] + 1;
    this.freq[x] = xFreq;

    if (xFreq > this.stackOfStacks.length) {
      this.stackOfStacks.push([]);
    }

    const stack = this.stackOfStacks[xFreq - 1];
    stack.push(x);
  }

  pop(): number {
    const topStack: number[] = this.stackOfStacks[this.stackOfStacks.length - 1];

    let returnValue: number = topStack.pop()!;
    this.freq[returnValue]--;

    if (this.freq[returnValue] === 0) {
      delete this.freq[returnValue];
    }

    if (topStack.length === 0) {
      this.stackOfStacks.pop();
    }

    return returnValue;
  }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */
