function factorialize(num) {
  let result = num
  if(result===0)return 1
  for(let i = 1; i<num; i++){
  result *= i
  }
  return result
}

console.log(factorialize(5))