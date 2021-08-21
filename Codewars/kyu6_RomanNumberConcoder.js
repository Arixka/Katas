function romanEncoder(num) {
	var numR = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	}

	let result = ""

	for (let key in numR) {
		if (num == numR[key]) return (result += key)

		var check = num > numR[key]

		if (check) {
			result = result + key.repeat(parseInt(num / numR[key]))
			num = num % numR[key]
		}
	}
	return result
}

console.log(romanEncoder(9), "IX", '9 should, "IX"')
console.log(romanEncoder(1001), "MI", '1001 should, "MI"')
console.log(romanEncoder(1990), "MCMXC", '1990 should, "MCMXC"')
