 
 //SUMAR ELEMENTOS DE UN ARRAY, TENIENDO SOLO UN MIN Y MAX
// function sumAll(arr) {
// let cont=0
// let max=0
// let min=0
// if(arr[0]>arr[1]){
// max=arr[0]
// min=arr[1]
// }else{
//   min=arr[0]
//   max=arr[1]
// }
//   for(var i=min; i<=max; i++){
//     cont += i
//   }
//   return cont;
// }
// sumAll([10, 5])
// //sumAll([1, 4]);
// //SEEK AND DESTROY
// function destroyer(arr) {
//   var arg =[...arguments]
//   return arr.filter(item=> {
//     console.log(!arg.includes(item))
//     return !arg.includes(item);
//     //compara todos los elementos y devuelve los q no se han repetido
//   });
// }
// destroyer([1, 2, 3, 1, 2, 3], 2, 3);//[1, 1]
// //destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) // [1, 5, 1].
// //COMPARAR DOS ARRAYS Y SACAR EL ELEMENTO DIFERENTE
// function diffArray(arr1, arr2) {
//   var newArr = [];
//   for (let i = 0; i < arr2.length; i++) {
//     if(arr1.indexOf(arr2[i]) == -1) {
//       newArr.push(arr2[i]);
//     } 
//   }
//     for (let j = 0; j < arr1.length; j++) {
//     if(arr2.indexOf(arr1[j]) == -1) {
//       newArr.push(arr1[j]);
//     } 
//   }

//   return newArr;
// } 
//USO DE ARGUMENTS ELIMINAR DE UN ARRAY EL RESTO DE PARAMETROS QUE ENTREN COMO PARAMETRO A LA FUNCION
function destroyer(arr, ...params) {
 return arr.filter(elem => !params.includes(elem));
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

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

//EMPAREJAR ADN AT, CG

function pairElement(str) {
 let arr=str.split('')

 for(var i = 0; i< arr.length; i++){
   if(arr[i] === 'C'){
     arr[i]=['C','G']
   }else if(arr[i] === 'G'){
     arr[i]=['G','C']
   }else if(arr[i] === 'A'){
     arr[i]=['A','T']  
  }else if(arr[i] === 'T'){
     arr[i]=['T', 'A']
  }
 }
  return arr;
}

pairElement("GCG");

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

//SORTED UNION
function uniteUnique(arr) {
	let newArr=[]
  let arg=[...arguments]
  //console.log(arg)
  for(let i=0; i<arg.length; i++){
    for(let j=0; j<arg[i].length; j++){
      if(newArr.indexOf(arg[i][j])=== -1){
        newArr.push(arg[i][j])
        
        }
     }
   }

  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//CONVERT HTML
function convertHTML(str) {
let str2=str.split('')
//console.log(str2)
  for(let i= 0; i< str2.length; i++){
    switch (str2[i]) {
      case '&':
       str2[i] = '&amp;';
        break;
      case '<':
       str2[i] = '&lt;';
        break;
      case '>':
       str2[i] = '&gt;';
        break;
      case '"':
       str2[i] = '&quot;';
        break;
      case "\'":
       str2[i] = '&apos;';
        break;
    }
  }
  return str2.join('')
}


// convertHTML("Dolce & Gabbana");//Dolce &amp; Gabbana
// //convertHTML("Hamburgers < Pizza < Tacos") // Hamburgers &lt; Pizza &lt; Tacos.
// //convertHTML("Sixty > twelve") // Sixty &gt; twelve.

// //FIBONACI SUMA IMPARES
// function sumFibs(num) {
// let num1=1 //previo
// let num2=1 //anterior a ese
// let sum = num1+num2
// while ((num1+num2) <= num) {  
//    let fib=num1+num2
//    if (fib % 2 !==0) {//resto distinto de cero 
    
//     sum += fib
//    }
//    num2=num1// al anterior le pasamos el valor del previo //1,1,2,3,5,8,13
//    num1=fib //al previo le damos el valor del fib
// }
// return sum
// }
//1,1,2,3,5,8,13... suma de los numeros impares <=num
//sumFibs(4);// 1, 1, 3 === return 5
sumFibs(1000) // 1785.

//SUM ALL PRIMES

function sumPrimes(num) {//menudo plagio amiga!
let arr=[]
const isPrime = num =>{
  for(let i= 2; i<num; i++){
    if(num % i ===0) return false //no es primo
  }
  return true
}//con esta funcion sacamos los primos

for(let i=num; i!=1; i--){// empieza del final hasta 1
if(isPrime(i)) arr.push(i)//metemos en el array solo los primos
}
console.log(arr)
  return arr.reduce((acc, curr)=> acc + curr)
}


//sumPrimes(10);//17
//sumPrimes(977) // 73156.

//MINIMO COMUN MULTIPLO DE UN RANGO
function smallestCommons(arr) {//locura
  //ordenamos el array
  let max
  let min
//ordenamos
 if( arr[0]<arr[1]){
   min=arr[0]
   max=arr[1]
 }else {
   max=arr[0]
   min=arr[1]
 }
 //multiplos 
 //obtenemos el array con el rango entre el min y el maximo
 function getRange(m, mx){
   let arrRange= []
   for(let i = min; i<=max; i++){
     arrRange.push(i)
   }
return arrRange
 }
 let range= getRange(min, max)
 //console.log(range)
 let multiple= 1 //no podemos multiplicar por 0
 while(multiple<1000000){
  let mcm=(min*multiple)*max
  //miramos los que son divisibles en el rango

  let divTrue= 0
for(let i= 0;i <range.length;i++){
  //console.log(mcm, range)
  if(mcm % range[i]===0){
    divTrue+=1
//console.log('divisible entre:',divTrue, 'rango',range.length)
//divTrue  nos dice cuando es divisible, en el caso de que sea divisible en todos los casos del rango, hemos encontrado la respuesta 6 es divisible entre 1, 2, 3, con resto 0. Por eso 6 es el minimoComunMultiplo del rango[1,2,3]
    if(divTrue===range.length){
      return mcm //retornamos el multiplo
    }
  }
  
}
   multiple +=1
 }
return ' Fuera de rango'
}
  
//smallestCommons([1,3]); //6
//smallestCommons([1,5]); //60
//smallestCommons([2, 10]) // 2520.
//smallestCommons([1, 13]) // 360360.
smallestCommons([23, 18])// 6056820.

//ELIMINAR ELEMENTOS CUANDO LA FUNCION ES TRUE  drop it
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

//APLANAR UN ARRAY ANIDADO
function steamrollArray(arr) {
  let newArr=[]
  function flatten(arr){
    arr.forEach(item=>{
      if(!Array.isArray(item)){
//si no es un array anidada, le metemos al newArr
     newArr.push(item)
     }else{
       flatten(item)
//si es un array entra aqui y vuelve a hacer la funcion esta ves con el arr q estaba dentro de nuestro arr principal
     }
    });
  }
  flatten(arr)
  return newArr;
}
//DE BINARIO A UTF16 Y LUEGO A TEXTO

steamrollArray([1, [2], [3, [[4]]]]) // [1, 2, 3, 4]
//steamrollArray([1, [], [3, [[4]]]]) // [1, 3, 4].
//steamrollArray([1, {}, [3, [[4]]]])// [1, {}, 3, 4]
//steamrollArray([[["a"]], [["b"]]]) // ["a", "b"].

function binaryAgent(str) {
  //convertirlo a utf16, luego este en ingles
  let arr=str.split(' ')
let newArr=[]
  for(let i=0;i<arr.length; i++){
    //console.log(arr[i],' ', parseInt(arr[i], 2) )
newArr.push(parseInt(arr[i], 2))
  }
  let str2 =[]
  for(let j=0; j<newArr.length; j++){
//console.log(newArr[j],' ', String.fromCharCode(newArr[j]))
str2.push(String.fromCharCode(newArr[j]))
  }
  
  return str2.join('')
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110

//COMPROBAR PROPIEDAD EN OBJETO
function truthCheck(collection, pre) {
return collection.every(item=>{
  //console.log(item[pre])
  return item[pre]
})

}

let resultado= truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

console.log(resultado) 01110101 01101110 00100001 00111111");

//ARGUMENTOS Y MAS
function addTogether() {
  let first= arguments[0]

  if(arguments.length>1){
    let second=arguments[1]
   return isValid(first, second)
  }else if(arguments.length===1){
   if(isNumber(first)===undefined){
     return undefined
   }else{
     return function(second){
       return isValid(first, second)
     }
   }
  }
}

function isValid(first, second){
  if(isNumber(first)!== undefined && 
  isNumber(second)!== undefined){
      return first+second;
    }else{
      return undefined
    }
}
function isNumber(arg){
  if(typeof arg==="number"){
    return arg
  }else{
    return undefined
  }
}

console.log(addTogether(5)(7))

//CREANDO UN OBJETO PERSONA
var Person = function(firstAndLast) {
  // Cambia solo el código debajo de esta línea
  // Completa el método de abajo e implementa los otros de manera similar
  

  this.getFullName = function() {
    return firstAndLast;
  };
  this.getFirstName= function(){
    return firstAndLast.split(' ')[0]
  };
  this.getLastName= function(newLastName){
    return firstAndLast.split(' ')[1]
  };

  this.setFullName = function(newFullName) {
    return firstAndLast= newFullName ;
  };
  this.setFirstName = function(newFirstName){
    return firstAndLast = newFirstName+" "+this.getLastName() 
  };

  this.setLastName= function(newLastName){
    return firstAndLast= this.getFirstName()+ " "+ newLastName; 
  };


};

var bob = new Person('Bob Ross');
bob.getLastName("Curry");
console.log(bob.getFullName())

//console.log(Object.keys(bob).length)

//console.log(bob.getFirstName())

//ORBITA
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let resultOrbit=[]
  arr.forEach(function(item){
    let translateItem={}

    let twoTimePie=Math.PI*2
    let earthRadiusPlusAverageAltitude= earthRadius+item.avgAlt
    let topOfDivider= earthRadiusPlusAverageAltitude**3
    let numerToSquare=topOfDivider/ GM
    let squareResult=Math.sqrt(numerToSquare)
    let orbitalPeriodResult=twoTimePie*squareResult

    translateItem.name=item.name
    translateItem.orbitalPeriod=Math.round(orbitalPeriodResult)
 

    resultOrbit.push(translateItem)
    //iteramos a traves de cada name
  });
  //propiedad avgAlt : --> orbitalPeriod
  return resultOrbit;
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))