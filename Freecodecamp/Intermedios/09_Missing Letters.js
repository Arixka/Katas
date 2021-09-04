//LETRAS FALTANTES DADO UN STR. MISSING LETTER

function fearNotLetter(str) {//0 al 25 //chartCodeAt?
let abc='abcdefghijklmnopqrstuvwxyz'
let start=abc.indexOf(str[0])
let miss=abc.slice(start)
//console.log(abc[start])
//al final del array sera el inicio mas el final
for(let i= start; i< start+str.length; i++){
  //console.log(abc[i])
  //recorremos el string y cuando encuentra una diferencia, entre nuestra variable abc y el indice del str - el comienzo (18 para la s), nos retorna el elemento que falta
  if(abc[i] !=str[i - start]){
    return abc[i]
  };
}
}
fearNotLetter("abce");
