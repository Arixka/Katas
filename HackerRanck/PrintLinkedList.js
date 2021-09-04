function printLinkedList(head) {
	let current = head

	if (!head) return null
	const printData = (node) => {
		if (!node) {
			return null
		}
		console.log(node.data)

		return printData(node.next)
	}

	return printData(current)
}
/**
    SinglyLinkedListNode {

      data: 16,

      next: SinglyLinkedListNode { data: 13, next: null }

    }
 */