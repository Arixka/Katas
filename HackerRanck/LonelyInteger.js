
function lonelyinteger(a) {
  let unique = a.filter (value => { 
  return a.indexOf(value) === a.lastIndexOf(value) 
  })
  return unique[0]
  }
  