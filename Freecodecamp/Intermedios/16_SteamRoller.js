//APLANAR ARRAYS ANIDADOS
function steamrollArray(arr) {
  let newArr=[]
  function flatten(arr){
    arr.forEach(item=>{
      if(!Array.isArray(item)){
//si no es un array anidada, le metemos al newArr
     newArr.push(item)
     }else{
       flatten(item)
//si es un array entra aqui y vuelve a hacer la funcion esta ves con el arr q estaba dentro de nuestro arr principal
     }
    });
  }
  flatten(arr)
  return newArr;
}


steamrollArray([1, [2], [3, [[4]]]]) // [1, 2, 3, 4]
//steamrollArray([1, [], [3, [[4]]]]) // [1, 3, 4].
//steamrollArray([1, {}, [3, [[4]]]])// [1, {}, 3, 4]
//steamrollArray([[["a"]], [["b"]]]) // ["a", "b"].