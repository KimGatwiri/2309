# Data Structures in JavaScript

## Basic Data Structures

### 1. Arrays
Arrays are used to store multiple values in a single variable.
```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // Output: 1
```

### 2. Linked Lists
A linked list is a linear data structure where elements are stored in nodes.
```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = newNode;
    }
}
let list = new LinkedList();
list.append(10);
list.append(20);
```

### 3. Stacks
A stack follows LIFO (Last In, First Out) principle.
```javascript
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Output: 2
```

### 4. Queues
A queue follows FIFO (First In, First Out) principle.
```javascript
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        return this.items.shift();
    }
}
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // Output: 1
```

## Advanced Data Structures

### 1. Hash Tables
A hash table stores key-value pairs and provides efficient lookups.
```javascript
class HashTable {
    constructor(size = 10) {
        this.table = new Array(size);
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }
    set(key, value) {
        let index = this._hash(key);
        this.table[index] = value;
    }
    get(key) {
        let index = this._hash(key);
        return this.table[index];
    }
}
let hashTable = new HashTable();
hashTable.set("name", "John");
console.log(hashTable.get("name")); // Output: John
```

### 2. Trees
Trees are hierarchical data structures.
```javascript
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
```

### 3. Graphs
Graphs represent a set of nodes and edges.
```javascript
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
}
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addEdge("A", "B");
```

## Conclusion
Understanding data structures is crucial for efficient problem-solving. Mastering basic and advanced data structures in JavaScript will help in optimizing performance and writing better code.
 