

function persistence(num) {
	let arr = String(num).split("")
	let cont = 0
	while (arr.length !== 1) {
		cont++
		arr = String(arr.reduce((a, b) => a * b)).split("")
	}
	return cont
}

console.log(persistence(4), 0)
console.log(persistence(25), 2)
