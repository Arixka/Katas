
//MINIMO COMUN MULTIPLO DE UN RANGO
function smallestCommons(arr) {//locura
  //ordenamos el array
  let max
  let min
//ordenamos
 if( arr[0]<arr[1]){
   min=arr[0]
   max=arr[1]
 }else {
   max=arr[0]
   min=arr[1]
 }
 //multiplos 
 //obtenemos el array con el rango entre el min y el maximo
 function getRange(m, mx){
   let arrRange= []
   for(let i = min; i<=max; i++){
     arrRange.push(i)
   }
return arrRange
 }
 let range= getRange(min, max)
 //console.log(range)
 let multiple= 1 //no podemos multiplicar por 0
 while(multiple<1000000){
  let mcm=(min*multiple)*max
  //miramos los que son divisibles en el rango

  let divTrue= 0
for(let i= 0;i <range.length;i++){
  //console.log(mcm, range)
  if(mcm % range[i]===0){
    divTrue+=1
//console.log('divisible entre:',divTrue, 'rango',range.length)
//divTrue  nos dice cuando es divisible, en el caso de que sea divisible en todos los casos del rango, hemos encontrado la respuesta 6 es divisible entre 1, 2, 3, con resto 0. Por eso 6 es el minimoComunMultiplo del rango[1,2,3]
    if(divTrue===range.length){
      return mcm //retornamos el multiplo
    }
  }
  
}
   multiple +=1
 }
return ' Fuera de rango'
}
  
//smallestCommons([1,3]); //6
//smallestCommons([1,5]); //60
//smallestCommons([2, 10]) // 2520.
//smallestCommons([1, 13]) // 360360.
smallestCommons([23, 18])// 6056820.