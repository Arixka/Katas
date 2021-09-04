Push inserta al final
Pop elimina el último elemento
Short elimina el primer elemento
Unshift agrega un elemento o varios al inicio de un array
Slice devuelve una copia d un array, o de una parte de ella
Splice puede eliminar elementos o añadirlos en la posición que queramos
IndexOf permite buscar elementos dentro una array devuelve el índice. Sino encuentra devuelve -1
Included mejora la búsqueda de objetos true o false
Filter permite buscar dentro d un array, seleccionando los elementos que quiero y creando con ellos un nuevo array

//INVIERTE UNA CADENA
function reverseString(str) {
  return str.split("").reverse().join("");
}

//FACTORIAL DE UN NUMERO
function factorialize(num) {
  for (var product = 1; num > 0; num--) {
    product *= num;
  }
  return product;
}

factorialize(5);

//ENCUENTRA LA PALABRA MAS LARGA
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

//ARRAY BIDIMENSIONAL DEVOLVER NUMERO MAYOR DE CADA ARREGLO
function largestOfFour(arr) {
var arrR = [];
for(var i=0; i<arr.length; i++) {
    //Bucle que recorre el array que está en la posición i
    var numMax= arr[i][0]
    for(var j=0; j < arr[i].length; j++) {
       //console.log(arr[i][j]);
      if(arr[i][j]> numMax){
      numMax=arr[i][j]
      }
    }
	arrR[i]=numMax
  } 
  return arrR;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//CONFIRMAR EL FINAL DE UNA FRASE
function confirmEnding(str, target) {
	//slice copia el array en otro array, arr.slice([inicio [, fin]]) 
	//arr.slice() hace una copia del array 
  return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n");

//REPETIR UNA FRASE
function repeatStringNumTimes(str, num) {
  var contador = "";

  while (num > 0) {
    contador += str;
    num--;
  }
  return contador;
}
repeatStringNumTimes("***", 3);

//COMPROBAR SI LA FRASE ES MAYOR AL NUMERO 
function truncateString(str, num) {

  var str2
  if (str.length > num) {
    str2= str.slice(0, num) 
    str2 += "...";
    return str2;
  } else {
    return str;
  }
}
truncateString("A-", 1);

//comprobar array con funcion
function findElement(arr, func) {
  let num = 0;
  for(var i=0; i<arr.length; i++){
    num=arr[i]
    if(func(num)) return num
  } 
    return undefined  
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

//PONER EN MAYUSCULA LA PRIMERA LETRA DE CADA PALABRA
function titleCase(str) {
  //var mayus= str.substring(0,1).toUpperCase()
  //str.split convierte la frase en un array y usa de separador los espacios
  var str2= str.split(" ")
  var res=[]
  for(var i=0; i < str2.length; i++){
    res.push(str2[i][0].toUpperCase()+str2[i].slice(1).toLowerCase())
  }
  var str3 = res.join(' '); 
  //join(' ') vuelve pasa de array a string y da un espacio entre cada elemento
  //console.log(mayus)
  return str3;
}
titleCase("I'm a litTle tea pot");
//INTERCALAR ARRAY DENTRO DE OTRA EN UNA POSICION DETERMINADA
function frankenSplice(arr1, arr2, n) {
//arr.splice() inserta en una posicion determinada de un array otro elemento, puede eliminar elementos o solo agregarlos
  let newArr = arr2.slice();
  console.log(newArr)
  for (var i = 0; i < arr1.length; i++) {
    newArr.splice(n, 0, arr1[i]);
    //n indica donde comienza
    //0 pq no eliminamos ningun registro al insertar 
    //con cada vuelta aumenta n y vamos haciendo lo mismo para añadir todos los elementos en la posicion que queremos, uno detras de otro
    n++;
  }
  return newArr;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);

//QUITAR ELEMENTOS VACIOS O FALSOS DE UN ARRAY
function bouncer(arr) {
//podemos usar filter para filtrar dentro de un array, al usar BOOLEAN que es una funcion en si misma, filtramos, quitamos los que sean false, nan, undefined o vacios
//podriamos usar cualquier funcion dentro de filter para obtener solo los elementos que queremos de un array(ej, numeros primos)
//arr.filter(function(item)) ó arr.filter(item => {return item>5}) creamos la funcion directamente
  let newArr=arr.filter(Boolean);//filter recorre nuestro array
  return newArr;
}

bouncer([7, "ate", "", false, 9]);

//FILTRANDO EN OBJETOS

let arr=[
  {
  id: 1,
  nombre: 'manzana',
  precio: 100
},
  {
  id: 2,
  nombre: 'pera',
  precio: 230
},
  {
  id: 3,
  nombre: 'naranja',
  precio: 80
}];

let newArr= arr.filter(item => {
  return item.precio >100
})
console.log(newArr)
//ORDENAR UN ARRAY Y OBTENER EL INDICE DEL NUM MAS PEQUEÑO
function getIndexToIns(arr, num) {
//usaremos .sort y le pasamos una funcion de ordenamiento
//arr.indexOf(elemento a buscar)
let newArr= arr.sort((a,b)=> a -b)
  let i = 0;
  while (num > newArr[i]) {
    i++;
  }

  return i;
//console.log(newArr)
}
getIndexToIns([3, 10, 5], 3); //1
getIndexToIns([40, 60], 50); //0
 //podemos hacer lo mismo con filter

function getIndexToIns(arr, num) {
return arr.filter(val => num > val).length
}

//COMPARAR ELEMENTOS DE UN ARRAY DA IGUAL MAYUSCULAS Y MINUSCULAS O EL ORDEN
function mutation(arr) {
  let newArr=arr[0].toLowerCase().split('')
  let newArr2=arr[1].toLowerCase().split('')
  for (let i = 0; i < newArr2.length; i++) {
    if (newArr.indexOf(newArr2[i]) < 0) return false;
  }
  return true;
}

//mutation(["ate", "date"]) //false
//mutation(["helLo", "Hello"]);//true
mutation(["hello", "Hey"]);//false
//mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) //true
//mutation(["Mary", "Army"])//true

//DIVIDIR ARRAY Y CREAR ARRAY BIDIMENSIONAL CON ESAS DOS ARRAY

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let i = 0;
  while (i < arr.length) {
    //le decimos donde empieza y donde termina 
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}

//chunkArrayInGroups(["a", "b", "c", "d"], 2) //[["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) // [[0, 1, 2], [3, 4, 5]].

//SORTER UNION: VARIOS ARGUMENTOS, COMPROBAR ELIMINAR LOS REPETIDOS
function uniteUnique(arr) {
  let arr2=[...arguments]//===Object.values(arguments) agrupamos en un array todos los argumentos que entran en la funcion
  //console.log(arr2)
  let newArr=[]
  for(let i=0; i<arr2.length; i++){
    for(let j= 0; j<arr2[i].length; j++){
      console.log(arr2[i][j],',',newArr.indexOf(arr2[i][j]))
      //cuando salta -1 es que ya existe
      if(newArr.indexOf(arr2[i][j])===-1){
        newArr.push(arr2[i][j])
      }
    }
  }
   
return newArr
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);//[1, 3, 2, 5, 4]

//CONVERT TO HTML Fail

function convertHTML(str) {
  let str2="";
  let convert=['&','<','>','"','\'']
  for(let i= 0; i< str.length; i++){
      //console.log(convert.indexOf(str[i])!==-1)
      if(convert.indexOf(str[i])!= -1){
        
        if(str[i]==='&'){
          str2= str.split('&').join('&amp;')
        }else if(str[i]==='<'){
          str2=str.split('<').join('&lt')
        }else if(str[i]==='>'){
          str2=str.split('>').join('&gt')
        }else if(str[i]==='"'){
          str2=str.split('"').join('&quot;')
        }else if(str[i]==='\''){
           str2=str.split('\'').join(';')
         }
  
      }
  //<> ==> &lt;&gt; devemos controlar este caso...
}
  return str2;
}