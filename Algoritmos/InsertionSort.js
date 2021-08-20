// Ordenacion por insercion(swap=intercambio). recorre el array y va colocando cada elemento en su sitio correcto,

let arr = [11, 3, 44, 81, 3, 5, 1, 136, 22]

const insertionSort = arr => {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j > 0 - 1; j--) {
			if (arr[j-1] > arr[j ]) {
				[arr[j-1], arr[j]]=[arr[j],arr[j-1]]
			}
		}
	}
  return arr
}

console.log(insertionSort(arr))

//divide el array de entrada en dos sublistas, una ordenada y otra no. Inicialmente la lista ordenada esta vacia, vamos recorriendo el array desordenado seleccionando el elemento mas pequeño, o grande, e intercambiando elementos
// iniciamos el array en 1, al ser el primer elemento, no podemos buscarle su sitio en el subarray, ya q el es el unico q esta dentro
