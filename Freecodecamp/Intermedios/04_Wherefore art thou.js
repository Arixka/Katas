//BUSCAR EN UN ARRAY DE OBJETOS POR PROPIEDAD 
 function whatIsInAName(collection, source) {
	 
 var propObj = Object.keys(source);//obtenemos la clave

  return collection.filter(obj => {
    //filter nos creara un nuevo array
	
    for (var item in propObj) {//hacemos un for por las propiedades del objeto propObj
      if ( !obj.hasOwnProperty(propObj[item]) ||
        obj[propObj[item]] !== source[propObj[item]]) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

