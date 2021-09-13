

function insertNodeAtPosition(llist, data, position) {
  let newNode = new SinglyLinkedListNode(data)
  let currentNode = llist
  let index = 0
  
  while (index<position-1) {
   currentNode = currentNode.next
   index++
  }
  newNode.next = currentNode.next
  currentNode.next= newNode
  
  return llist
  }

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */