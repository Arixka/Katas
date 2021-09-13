function processData(n, arr) {
	let newArr = [...arr]
	for (let i = 0; i < n; i++) {
		let first = newArr.shift()
		newArr.push(first)
	}
	return newArr
}

// function processData(n, arr) {
// for (let i = n; i < arr.length; i++) {
//   arr.unshift(arr.pop())
// }
//   return arr
// }
console.log(processData(2, [1, 2, 3, 4, 5]))
