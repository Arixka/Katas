//Ordenamiento rapido
let arr = [11, 3, 44, 81, 31, 5, 1, 136, 22]


//divide y vencerar, divide el array en trozos mas pequeños

const quickSort = arr => {
	let left = []
	let right = []
	let pivot = arr[0]
	if (arr.length <= 1) return arr
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}
	if (left.length > 0 && right.length > 0) {
		return [...quickSort(left), pivot, ...quickSort(right)]
	} else if (left.length > 0) {
		return [...quickSort(left), pivot]
	} else {
		return [pivot, ...quickSort(right)]
	}
}
console.log(quickSort(arr))



const quickSort2 = arr => {
	let left = []
	let right = []
	let pivot = arr[0]
	if (arr.length <= 1) return arr
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}

	return [...quickSort2(left), pivot, ...quickSort2(right)]
}

console.log(quickSort2(arr))