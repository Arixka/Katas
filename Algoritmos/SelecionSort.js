// Ordenacion por seleccion, algoritmo de comparacion, buscando el valor minimio, y los intercambia. array simples, inestable(orden de los elementos duplicados no se conserva)

let arr = [11, 3, 44, 81, 31, 5, 1, 136, 22]

const selectionSort = arr => {

	for (leti = 0; i < arr.length; i++) {
		let min = i
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j
			}
		}

		if (min !== i) {
			[arr[i], arr[min]] = [arr[min], arr[i]]
		}
	}
	return arr
}

console.log(selectionSort(arr))

