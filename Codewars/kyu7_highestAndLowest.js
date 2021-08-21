
function highAndLow(numbers){
  let arr=numbers.split(' ')
  let min=Math.min(...arr)
  let max= Math.max(...arr)
  return max+' '+ min
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");

