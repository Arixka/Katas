//SUM ALL PRIMES

function sumPrimes(num) {//menudo plagio amiga!
let arr=[]
const isPrime = num =>{
  for(let i= 2; i<num; i++){
    if(num % i ===0) return false //no es primo
  }
  return true
}//con esta funcion sacamos los primos

for(let i=num; i!=1; i--){// empieza del final hasta 1
if(isPrime(i)) arr.push(i)//metemos en el array solo los primos
}
console.log(arr)
  return arr.reduce((acc, curr)=> acc + curr)
}


//sumPrimes(10);//17
//sumPrimes(977) // 73156.