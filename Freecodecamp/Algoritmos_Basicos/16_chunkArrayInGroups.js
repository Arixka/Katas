function chunkArrayInGroups(arr, size) {
  let newArr = []
  let i = 0
  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size))
    i += size
  }
  return newArr
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))