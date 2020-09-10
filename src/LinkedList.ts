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
  let newNode = { value, next:null }
  
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
 
}

export function findNode(linkedList: LinkedList, value: string) : Node {
  
}

export function removeAfter(linkedList: LinkedList, node: Node): Node {
  
}

export function removeHead(linkedList: LinkedList) : Node {
 
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