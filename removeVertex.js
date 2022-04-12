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
      const current = this.nodes.get(value);
      if(current) {
          for (const node of this.nodes.values()) {
              node.removeAdjacent(current);
          }
      }
      return this.nodes.delete(v1);
  }

//   removeVertex(v1) {
//       if(!this.graph.has(v1)) return;

//       const data = this.graph.get(v1);
//       for(let i = 0; i < data.length; i++) {
//           this.removeEdge(data[i], v1);
//       }
//       this.graph.delete(v1);
//       return;

//   }
}