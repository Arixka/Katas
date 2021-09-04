//FIBONACI SUMA IMPARES
function sumFibs(num) {
let num1=1 //previo
let num2=1 //anterior a ese
let sum = num1+num2
while ((num1+num2) <= num) {  
   let fib=num1+num2
   if (fib % 2 !==0) {//resto distinto de cero 
    
    sum += fib
   }
   num2=num1// al anterior le pasamos el valor del previo //1,1,2,3,5,8,13
   num1=fib //al previo le damos el valor del fib
}
return sum
}
//1,1,2,3,5,8,13... suma de los numeros impares <=num
//sumFibs(4);// 1, 1, 3 === return 5
sumFibs(1000) // 1785.
