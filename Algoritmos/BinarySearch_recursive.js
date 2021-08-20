// Busqueda binaria recursiva, necesitamos una lista ordenada

let arr = [1, 3, 5, 13, 44, 81, 101, 136]
let objetive = 13
let leng = arr.length

const binarySearchRecursive = (arr, left, right, objetive) => {
	if (right >= left) {
		let mid = Math.floor(left + (right - left) / 2)
		if (arr[mid] === objetive) {
			return `Hemos encontrado el elemento ${objetive} en el indice ${mid}`
		}
		if (arr[mid] > objetive) {
			return binarySearchRecursive(arr, left, mid - 1, objetive)
		}
		return binarySearchRecursive(arr, mid + 1, right, objetive)
	}

	return `No existe el elemento ${objetive} dentro de este array`
}
console.log(binarySearchRecursive(arr, 0, leng - 1, objetive))

//necesitamos el tamaño del array,indice inicial (left), indice final(right), el item a buscar y el array

// left(inicial) tiene q ser menor que right(final) si left es mayor que right y por tanto right de left, los indices se han cruzado, entonces entendemos q no han encontrado al objetive

//necesitamos hacer bloques con las busquedas, por lo tanto si el primer bloque es desde 0 al final del arr, buscamos la mitad y el siguiente bloque sera descartando el lado donde sepamos que no esta nuestro objetivo left + (right-left) /2
