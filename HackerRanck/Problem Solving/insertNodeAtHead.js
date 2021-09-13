function insertNodeAtHead(head, data) {
  let newNode= new SinglyLinkedListNode(data)
  if(!head){
      head= newNode
      return head
  }else {
      newNode.next = head
      head= newNode
  }
  return head
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