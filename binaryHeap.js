class MaxBinaryHeap {
  constructor() {
    this.value = [];
  }

  insert(val) {
    this.value.push(val);
    this.bubbleUp();
  }

  extract() {
    const returnValue = this.value[0];
    this.value[0] = this.value[this.value.length - 1];
    this.value.pop();

    let targetIndex = 0;
    while (true) {
      const leftChildIndex = 2 * targetIndex + 1;
      const rightChildIndex = 2 * targetIndex + 2;

      const leftChildValue = this.value[leftChildIndex];
      const rightChildValue = this.value[rightChildIndex];
      let higherChildIndex =
        leftChildValue > rightChildValue ? leftChildIndex : rightChildIndex;

      if (this.value[higherChildIndex] == undefined) {
        if (leftChildValue == undefined) {
          higherChildIndex = rightChildIndex;
        } else {
          higherChildIndex = leftChildIndex;
        }
      }
      // Swap targetIndex node with child Node
      if (this.value[higherChildIndex] <= this.value[targetIndex]) break;
      if (this.value[higherChildIndex] == undefined) break;
      const temp = this.value[targetIndex];
      this.value[targetIndex] = this.value[higherChildIndex];
      this.value[higherChildIndex] = temp;
      targetIndex = higherChildIndex;
    }

    return returnValue;
  }

  bubbleUp() {
    let index = this.value.length - 1;
    const element = this.value[index];

    while (true) {
      const parentIndex = Math.floor(index / 2);
      const parent = this.value[parentIndex];

      if (element <= parent) break;
      this.value[index] = parent;
      this.value[parentIndex] = element;
      index = parentIndex;
    }
  }
}