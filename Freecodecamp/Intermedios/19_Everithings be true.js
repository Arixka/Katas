//COMPROBAR PROPIEDAD EN OBJETO
function truthCheck(collection, pre) {
return collection.every(item=>{
  //console.log(item[pre])
  return item[pre]
})

}

let resultado= truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

console.log(resultado)