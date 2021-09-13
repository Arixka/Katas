function diagonalDifference(arr) {
  let leftSum = 0
  let rightSum = 0
  arr.forEach((el, i)=>{
    let left = el[i]
    let right = el[arr.length-1 - i]
          leftSum += left
          rightSum += right
  })
  return Math.abs(leftSum-rightSum)
}
console.log(diagonalDifference([[11,2,4], [4,5,6],[10,8,-12]]))

function diagonalDifference1(arr) {
  let leftSum = 0
  let rightSum = 0
  for(let i = 0; i<arr.length; i++){
    let left = arr[i][i]
    let right = arr[i][arr.length-1 - i]
          leftSum += left
          rightSum += right
  }
  return Math.abs(leftSum-rightSum)
}
console.log(diagonalDifference1([[11,2,4], [4,5,6],[10,8,-2]]))

function diagonalDifference2(arr) {
  let leftSum = 0//left to right diagonal
  let rightSum = 0
  let n = arr[0].length
  for(let i = 0, j = n-1; i<n; i++, j--){
          leftSum += arr[i][i]
          rightSum += arr[i][j]
  }
  return Math.abs(leftSum-rightSum)
}
console.log(diagonalDifference2([[11,2,4], [4,5,6],[10,8,-10]]))