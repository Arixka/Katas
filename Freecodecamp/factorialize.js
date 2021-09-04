const factorialize = (num) => {
	let result = 1
	for (let i = 1; i < num; num--) {
		result *= num
	}
	return result
}
console.log(factorialize(5))

const rescursiveFactorialize = (num) => {
	return num === 0 ? 1 : num * rescursiveFactorialize(num - 1)
}

console.log(rescursiveFactorialize(5))
