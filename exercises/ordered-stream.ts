class OrderedStream {
  currentStream: Record<number, string> = {};
  currentPointer: number = 1;

  constructor(n: number) {
    for (let i = 1; i < n; i++) {
      this.currentStream[i] = "";
    }
  }

  tryToReturnStream(): string[] {
    const availableStream = [];

    while (this.currentStream[this.currentPointer]) {
      availableStream.push(this.currentStream[this.currentPointer]);
      this.currentPointer++;
    }

    return availableStream;
  }

  insert(idKey: number, value: string): string[] {
    this.currentStream[idKey] = value;

    return this.tryToReturnStream();
  }
}
