class PriorityQueue {
  constructor() {
    this.values = [44, 33, 55, 11, 12, 22];
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;

      let index = 0;
      const length = this.values.length;
      const element = this.values[0];

      while(true) {
        let leftIndex = 2 * index + 1;
        let rightIndex = 2 * index + 2;
        let leftChild, rightChild;
        let swap = null;

        if (leftIndex < length) {
          leftChild = this.values[leftIndex];
          if(leftChild.priority < element.priority) {
            swap = leftIndex;
          }
        }

        if (rightIndex < length) {
          rightChild = this.values[rightIndex];
          if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
            swap = rightIndex;
          }
        }
        if (swap === null) break;
        this.values[index] = this.values[swap];
        this.values[swap] = element;
        index = swap;
      }
    }
    return min;
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);

    let index = this.values.length -1; 
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];

      if (element.priority >= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
    return this.values;
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}




const queue = new PriorityQueue();
queue.enqueue(6, 6);
queue.enqueue(10, 7);
queue.enqueue(7, 8);
queue.dequeue(6, 6);
console.log(queue)

