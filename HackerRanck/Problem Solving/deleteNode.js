
function deleteNode(llist, position) {
  if(llist=== null) return llist
  if(position===0) return llist = llist.next
  
  let currentNode = llist
  let index=0
  
  while(index<position-1){
   currentNode = currentNode.next
   index++
  }
   currentNode.next = currentNode.next.next
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