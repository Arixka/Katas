//DE BINARIO A UTF16 Y LUEGO A TEXTO
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

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
