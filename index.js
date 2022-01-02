class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top.value
  }
  push(value) {
    if (this.length === 0) {
      let node = new Node(value);
      this.top = node;
      this.bottom = this.top;
      this.length++;
      return this
    }
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.length++;
    return this;
  }
  pop() {

    if (this.isEmpty()) {
      return this;
    }
    if(this.length === 1){
      this.bottom = null;
    }
    let next = this.top.next;
    this.top = next;
    this.length--;
    return this;

  }
  isEmpty() {
    return this.length === 0
  }
}

const myStack = new Stack();
myStack.push("Discord")
myStack.push("Udemy")
myStack.push("Google");

console.log(myStack.peek());
console.log(myStack.isEmpty())

myStack.pop()
console.log(myStack.peek());
myStack.pop()
console.log(myStack.peek());
myStack.pop();

console.log(myStack.isEmpty())

//Discord
//Udemy
//google
