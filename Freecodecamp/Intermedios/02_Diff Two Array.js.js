//COMPARAR DOS ARRAYS Y SACAR EL ELEMENTO DIFERENTE
function diffArray(arr1, arr2) {
  var newArr = [];
  for (let i = 0; i < arr2.length; i++) {
    if(arr1.indexOf(arr2[i]) == -1) {
      newArr.push(arr2[i]);
    } 
  }
    for (let j = 0; j < arr1.length; j++) {
    if(arr2.indexOf(arr1[j]) == -1) {
      newArr.push(arr1[j]);
    } 
  }

  return newArr;
} 
//USO DE ARGUMENTS ELIMINAR DE UN ARRAY EL RESTO DE PARAMETROS QUE ENTREN COMO PARAMETRO A LA FUNCION
function destroyer(arr, ...params) {
 return arr.filter(elem => !params.includes(elem));
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
