//ELIMINAR ELEMENTOS CUANDO LA FUNCION ES TRUE
function dropElements(arr, func) {
  let newArr=[]
  for(let i=0;i<arr.length; i++){
    console.log(func(arr[i]), arr.slice(i))
    if(func(arr[i])){
      return arr.slice(i)
     
    }
  }
  return newArr
}


//dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) // [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) // [1, 0, 1] no rula

//dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})// [3, 9, 2]. tampoco

//dropElements([1, 2, 3], function(n) {return n > 0;}) // [1, 2, 3]
//dropElements([1, 2, 3, 4], function(n) {return n > 5;}) //[].