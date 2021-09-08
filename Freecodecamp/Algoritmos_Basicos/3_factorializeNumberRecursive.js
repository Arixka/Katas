function factorialize(num) {
  return (num<=1) ? 1 : num * factorialize(num-1) 
 }
 
 console.log(factorialize(5))