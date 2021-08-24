function rotateLeft(n, arr) {
  // Write your code here
  // for (let i = n; i < arr.length; i++) {
  //   arr.unshift(arr.pop()) 
  // }
  //   return arr
  let newArr = [...arr]
  for (let i = 0; i < n; i++) {
      let first = newArr.shift()
      newArr.push(first)
  }
  return newArr
}