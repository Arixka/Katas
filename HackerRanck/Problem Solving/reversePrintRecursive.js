function reversePrint(llist) {

  if(llist.next!=null) reversePrint(llist.next)
  console.log(llist.data)
  
}

