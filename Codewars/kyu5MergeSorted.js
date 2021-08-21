function mergesorted(a, b) {
  const result = []
  while(a.length&&b.length){
    if(a[0]<b[0]){
      result.push(a.shift())
    }else {
      result.push(b.shift())
    }
  }

  return [...result,...a,...b]
}

console.log(mergesorted([1,2],[3,4])) //should: [1,2,3,4]