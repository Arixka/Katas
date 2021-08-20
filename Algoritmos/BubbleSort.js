// Metodo burbuja, ordena un array === selection sort
let arr = [11, 19, 9, 3, 44, 127, 83, 7, 13, 1, 6]

const bubbleSorterRecursive = (arr, len = arr.length) => {

	if (len === 1) {
		return arr
	}
	for (let j = 0; j < arr.length; j++) {
		if (arr[j] > arr[j + 1]) {
			[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
		}
	}
	return  bubbleSorterRecursive(arr, len-1)
}

console.log(bubbleSorterRecursive(arr))

const bubleSorter = () => {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
			}
		}
	}
	return arr
}

//console.log(bubleSorter())

const bubleSorter2 = () => {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}
	return arr
}

// Vamos a ir pasando los numeros pequeños se van a pasar a la izquierda, comparamos un elemento con el siguiente, si es siguiente es menor que el anterior, lo pasamos a la izquierda ordena menor<mayor
