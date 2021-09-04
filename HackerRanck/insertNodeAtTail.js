function insertNodeAtTail(head, data) {
  let newNode = new SinglyLinkedListNode(data)
    if (!head) {
        head = newNode 
        return head
    }
    let current  = head
    while (current.next) {
        current = current.next
    }
    current.next = newNode
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