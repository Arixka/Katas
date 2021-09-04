//pig latin, si empieza en vocal añadir +way al final, si es consonante quitarla y añadir +ay al final

function translatePigLatin(str) {
  var vocales='aeiou'.split('')
  for(var i=0;i<str.length; i++){
//si es una vocal y esta en la posicion 0
//console.log(vocales.indexOf(str[i]) != -1) //consonante===-1 vocal != -1
    if(vocales.indexOf(str[i]) != -1 && i === 0){
      return str + 'way';
    }
    if(vocales.indexOf(str[i]) != -1){
      return str.slice(i) + str.slice(0, i) + 'ay';
    }
  }
  return str +'ay';
}


translatePigLatin("algorithm") // algorithmway.
//translatePigLatin("eight") // eightway.
//translatePigLatin("california") //aliforniacay.

