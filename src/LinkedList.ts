export interface Node {
  next: Node | null;
  value: string;
};

interface LinkedList {
  head: Node;
}

export const emptyLinkedList: LinkedList = { head: null };

// create a new node
export function createNode(value: string) : Node {
  return { value, next: null };
}

// create a new linked list
export function createLinkedList(value: string) : LinkedList {
  return { head: { value, next: null } } 
}

// insert a new node after a node in a linked list
export function insertAfter(node: Node, value: string) : Node {
let newNode : Node = { value, next:null }
  if (node) {
    node.next = newNode
  }
  return newNode
}

// insert after tail
export function append(linkedList: LinkedList, value: string) : Node {
  let tailLinkedList: Node = tail(linkedList);
  return insertAfter(tailLinkedList, value);
}

export function length(linkedList: LinkedList) : number {
  if(linkedList.head === null) {
    return 0;
  };
  let len = 0;
  let iterator = linkedList.head;
  while(iterator) {
    len = len + 1;
    iterator = iterator.next;
  }
  return len;
}

export function tail(linkedList: LinkedList) : Node {
  if (linkedList.head.next == null) {
    return linkedList.head
  }
  let node = linkedList.head.next
  while (node.next) {
    node = node.next
  }
  return node
}

export function findNode(linkedList: LinkedList, value: string) : Node {
  let nodeToFind = linkedList.head
  while (nodeToFind.next) {
    nodeToFind = nodeToFind.next
  }
  if (nodeToFind.value == value)
  return nodeToFind
}

export function removeAfter(linkedList: LinkedList, node: Node): Node {
  let temp = node.next
  node.next = node.next.next
  temp.next = null
  return temp
}

export function removeHead(linkedList: LinkedList) : Node {
  let temp = linkedList.head
  linkedList.head = linkedList.head.next
  temp.next = null
  return temp
}

export function forEach(linkedList: LinkedList, callback: (value: string, index: number) => void) : void {

}

export function print(linkedList: LinkedList) : string {
  let results : string[] = [];
  forEach(linkedList, (value) => { results.push(value) } );
  return results.join(", ");
}


export function toMap(linkedList: LinkedList) : Node[] {
  
}

export function updateNode(node: Node, value: string) : Node {
  node.value = value;
  return node;
}