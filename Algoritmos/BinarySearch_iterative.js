// Busqueda binaria iterativa, necesitamos una lista ordenada

let arr = [1, 3, 5, 13, 44, 81, 101, 136]
let objetive = 101
let leng = arr.length

const binarySearchIterative = (arr, left, right, objetive)=> {

  while (left <= right){
    let mid = Math.floor(left + (right - left) / 2) 
    if(arr[mid] === objetive){
      return `Hemos encontrado al elemento ${objetive} en el indice ${mid}`
    }
    if(arr[mid]<objetive){
      left = mid + 1
    }else {
      right = mid - 1
    }
  }
  return `No memos en el elemento ${objetive} dentro de este array`
}

console.log(binarySearchIterative(arr, 0, leng - 1, objetive))