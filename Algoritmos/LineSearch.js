//Busqueda lineal, no necesitamos una lista ordenada

let arr = [1, 3, 5, 13, 44, 81, 101, 136]
let objetive = 10

const lineSearch = (arr, objetive) => {
	let result = 0
	let index = 0
	let found = false

	while (!found && arr.length > index) {
		if (arr[index] === objetive) {
			found = true
			result = index
		} else {
			index += 1
		}
	}
	return result 
		? `Hemos encontrado el item ${objetive} en el indices ${result}`
		: `No existe el item ${objetive} en el array`
}
console.log(lineSearch(arr, objetive))

//El algoritmo de búsqueda lineal es ineficiente al usarlo con arrays grandes. La busqueda binaria, aun teniendo que ordenar los elementos es mas eficaz es esos casos 
