
var uniqueInOrder = function (iterable) {
	let arr = []

	let last

	for (let i = 0; i < iterable.length; i++) {
		if (iterable[i] !== last) arr.push(iterable[i])

		last = iterable[i]
	}

	return arr
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"), ["A", "B", "C", "D", "A", "B"])
