//BUSCA Y REEMPLAZA EN UNA CADENA
function myReplace(str, before, after) {
  var str2= str.split(' ')
  for(var i= 0; i<str2.length; i++){
    if(str2[i]=== before){
      str2[i]=after
      var letra=before[0]// letra de antes
      //console.log(letra)
      if(letra === letra.toUpperCase()){  
//console.log('meh')
        var letra2= after[0].toUpperCase()       
        var after2=after.slice(1)
                //console.log(letra2+after2)
        str2.splice(i, 1, letra2+after2)
      }else{
        var letra2= after[0].toLowerCase()
        console.log('meee')
        str2.splice(i, 1, letra2+after.slice(1))
      }
    }
  }
  var str3= str2.join(' ')
  return str3;
}

//myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
//myReplace("Let us go to the store", "store", "mall") // Let us go to the mall.
//myReplace("He is Sleeping on the couch", "Sleeping", "sitting") // He is Sitting on the couch.
//myReplace("I think we should look up there", "up", "Down") // I think we should look down there.
//myReplace("This has a spellngi error", "spellngi", "spelling") // This has a spelling error.
myReplace("His name is Tom", "Tom", "john") // His name is John.
//myReplace("Let us get back to more Coding", "Coding", "algorithms") // Let us get back to more Algorithms
