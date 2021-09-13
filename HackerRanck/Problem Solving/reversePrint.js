function reversePrint(llist) {
  let arr = []
  let currentNode = llist
  while(currentNode) {
      arr.push(currentNode.data)
      currentNode= currentNode.next
  }
  while(arr.length>0){
      console.log(arr.pop())
  }