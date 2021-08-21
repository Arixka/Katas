function monkeyCount(n) {
	let arr = []
	for (var i = 1; i <= n; i++) {
		arr.push(i)
	}
	return arr
}

console.log(monkeyCount(9), [1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(monkeyCount(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
