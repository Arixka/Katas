Array.prototype.numberOfOccurrences = function (num) {
	console.log(this)
	const arr = this
	let count = 0
	arr.filter((e) => {
		if (e === num) count++
	})
	return count
}

console.log(arr.numberOfOccurrences(4), 2)