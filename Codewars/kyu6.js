function solution(num) {
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

console.log(solution(9), "IX", '9 should, "IX"')
console.log(solution(1001), "MI", '1001 should, "MI"')
console.log(solution(1990), "MCMXC", '1990 should, "MCMXC"')

function isValidWalk(walk) {
	if (walk.length < 10 || walk.length > 10) return false
	let y = 0
	let x = 0
	for (let i = 0; i < walk.length; i++) {
		if (walk[i] === "n") y++
		if (walk[i] === "s") y--
		if (walk[i] === "e") x++
		if (walk[i] === "w") x--
	}
	console.log(x, y)
	return x === 0 && y === 0
}

console.log(
	isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
	"should return true"
)
console.log(
	!isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
	"should return false"
)

function toCamelCase(str) {
	let e = ""
	let arr = []
	if (str.includes("-")) e = str.split("-")
	else e = str.split("_")
	arr.push(e[0])
	for (let i = 1; i < e.length; i++) {
		arr.push(e[i].charAt(0).toUpperCase() + e[i].slice(1))
	}
	return arr.join("")
}

console.log(
	toCamelCase("the_stealth_warrior"),
	"theStealthWarrior",
	"toCamelCase('the_stealth_warrior') did not return correct value"
)
console.log(
	toCamelCase("The-Stealth-Warrior"),
	"TheStealthWarrior",
	"toCamelCase('The-Stealth-Warrior') did not return correct value"
)

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

var generateColor = function () {
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
	let str = []
	for (let i = 0; i < 6; i++) {
		let i = Math.floor(Math.random() * arr.length)
		str.push(arr[i])
	}
	return "#" + str.join("")
}

console.log(
	generateColor().substring(0, 1),
	"#",
	"should start with the symbol #"
)

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

function isPangram(string) {
	let abc = "abcdefghijklmnopqrstuvwxyz".split("")
	let minus = string.toLowerCase()

	for (let i = 0; i < abc.length; i++) {
		if (!minus.includes(abc[i])) return false
	}
	return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."), true)
console.log(isPangram("This is not a pangram."), false)
