//metodo de ordenamiento externo y estable, divide el array en dos , ordena el lado izq, y luego el lado derecho y las une

const arr = [1, 4, 12, 8, 345, 123, 43, 32, 5643, 63, 123, 439, 2, 55, 17, 234, 92]

//unifica
const mergeArray = (arrLeft, arrRight) => {
	let result = []

	while (arrLeft.length && arrRight.length) {

		if (arrLeft[0] <= arrRight[0]) {
			result.push(arrLeft.shift())
		} else {
			result.push(arrRight.shift())
		}
		
	}

	result = result.concat(arrLeft).concat(arrRight)

	return result
}
//divide
const mergeSort = arr => {
	if (arr.length < 2) {
		return arr
	}

	let middle = Math.floor(arr.length / 2)

	let arrLeft = arr.slice(0, middle)
	let arrRight = arr.slice(middle)

	return mergeArray(mergeSort(arrLeft), mergeSort(arrRight))
}

console.log(mergeSort(arr))

/**
 MergeSort
  miramos primero si el array se puede dividir
  sacamos middle, la mitad del length del array 
  dividimos el array en dos 
  volvemos a llamar a mergesort
 

  MergeArray
    creamos un array vacio
    comprobamos si cualquiera de los arrays estan vacios
    buscamos el valor mas pequeño 
      añadimos el valor izquierda 
      añadimos el valor derecho 
    hacemos merge del array izquierdo
    hacemos merge del array derecho
    return result
 */
