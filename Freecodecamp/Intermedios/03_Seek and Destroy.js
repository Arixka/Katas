//BUSCA LOS QUE SE REPITEN Y LOS ELIMINA
function destroyer(arr) {
  var arg =[...arguments]
  return arr.filter(item=> {
    console.log(!arg.includes(item))
    return !arg.includes(item);
    //compara todos los elementos y devuelve los q no se han repetido
  });
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);//[1, 1]
//destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) // [1, 5, 1].