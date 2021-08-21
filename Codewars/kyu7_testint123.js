
var number = function (array) {
	if (array !== []) {
		console.log(array)
		array.forEach((e, i) => {
			console.log(`${i + 1}: ${e}`)
			array[i] = `${i + 1}: ${e}`
		})
	} else {
		return array
	}
	return array
}

console.log(number([]), [], "Empty array should return empty array")
console.log(
	number(["a", "b", "c"]),
	["1: a", "2: b", "3: c"],
	"Return the correct line numbers"
)
