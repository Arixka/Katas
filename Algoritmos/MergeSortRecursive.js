//Ordenacion combinada, divide el array recursivamente, primero dividimos el array a la mitad hasta obtener una subcadena de un elemento. Ahora uniremos cada subarray ordenada hasta tener un array final ordenado

let arr = [1, 33, 5, 16, 11, 44, 81, 7, 136]
//sort arr
const mergeArray = (left, right)=>{
 const res = []
 let leftIndex = 0
 let rightIndex = 0

 while(leftIndex < left.lenght && rightIndex < right.lenght){
   console.log(leftIndex, rightIndex)
  let leftElem = left[leftIndex]
  let rightElem = right[rightIndex]


  if(leftElem < rightElem){
    res.push(leftElem)
    leftIndex++
  }else{
    res.push(rightElem)
    rightIndex++
  }

 }

 return [...res,...left.slice(leftIndex),...right.slice(rightIndex)]
}

//recursive
const mergeSort = (arr) =>{
  console.log(arr)
if(arr.length<=1) {
  return arr
}

let mid = Math.floor(arr.length / 2)
let left = arr.slice(0, mid)
let right = arr.slice(mid)

  return mergeArray(mergeSort(left),mergeSort(right))
}

console.log(mergeSort(arr))