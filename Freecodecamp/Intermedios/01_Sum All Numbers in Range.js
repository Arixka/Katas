//SUMAR ELEMENTOS DE UN ARRAY, TENIENDO SOLO UN MIN Y MAX
function sumAll(arr) {
let cont=0
let max=0
let min=0
if(arr[0]>arr[1]){
max=arr[0]
min=arr[1]
}else{
  min=arr[0]
  max=arr[1]
}
  for(var i=min; i<=max; i++){
    cont += i
  }
  return cont;
}
sumAll([10, 5])
//sumAll([1, 4]);

