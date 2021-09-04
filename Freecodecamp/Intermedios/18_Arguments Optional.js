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