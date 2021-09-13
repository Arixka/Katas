const sumArr = (arr, row, col) =>{
  let sum = arr[row][col]+ arr[row][col+1]+arr[row][col+2]
  sum+=arr[row+1][col+1]
  sum+=arr[row+2][col]+ arr[row+2][col+1]+arr[row+2][col+2]
console.log(sum)   
  return sum
}
const hourglassSum = (arr) => {
  let max = -Infinity
  
  for(let row=0; row<=3; row++){
      for(let col=0; col<= 3; col++){
       if(sumArr(arr, row, col)>max)  max = sumArr(arr, row, col)  
      }
  }
  return max
}

