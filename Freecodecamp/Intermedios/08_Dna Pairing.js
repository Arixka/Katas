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
