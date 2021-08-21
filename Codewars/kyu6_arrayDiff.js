
function arrayDiff(a, b) {
	let result = []
	for (let i = 0; i < a.length; i++) {
		let count = 0
		for (let j = 0; j < b.length; j++) {
			if (a[i] === b[j]) count++
		}
		if (count === 0) result.push(a[i])
	}
	return result
}

console.log(arrayDiff([3, 4], [3]), [4], "a was [3,4], b was [3]")
console.log(arrayDiff([1, 8, 2], []), [1, 8, 2], "a was [1,8,2], b was []")
