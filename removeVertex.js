class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    // this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v1] = this.filterVertices(v1, v2);

    // this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    this.adjacencyList[v2] = this.filterVertices(v2, v1);
  }

  //

  filterVertices(v1, v2) {
    const newArray = [];
    for (let i = 0; i < this.adjacencyList[v1].length; i++) {
      if (this.adjacencyList[v1][i] !== v2) {
        newArray.push(this.adjacencyList[v1][i]);
      }
    }
    return newArray;
  }

  removeVertex(v1) {
    if (this.adjacencyList[v1]) {
      this.adjacencyList[v1].forEach((v) => this.removeEdge(v1, v));
      delete this.adjacencyList[v1];
    }
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("A", "C");
g.addEdge("A", "D");
g.addEdge("B", "D");

g.removeEdge("A", "C");

g.removeVertex("A");

console.log(g);
