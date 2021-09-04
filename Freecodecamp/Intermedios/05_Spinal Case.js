//SPINAL CASE TODO EN MINUSCULAS SEPARADO POR GUIONES
function spinalCase(str) {
 
var str1= str.replace(/([a-z])([A-Z])/g, "$1 $2")//separamos el string cuando tengamos una minuscula antes de una mayuscula
var str2= str1.split('_').join(' ')
//ponemos espacio en el caso de _
var str3= str2.split(' ').join('-').toLowerCase()
//y luego donde tengamos espacio metemos el - y todo a minuscula
  return str3;
}

//spinalCase('This Is Spinal Tap');
//spinalCase("thisIsSpinalTap") //this-is-spinal-tap.
spinalCase("The_Andy_Griffith_Show") // the-andy-griffith-show.
//spinalCase("AllThe-small Things") //all-the-small-things.
