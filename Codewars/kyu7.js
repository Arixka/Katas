function spacify(str) {
	return str.split("").join(" ")
}

console.log(spacify("12345"), "1 2 3 4 5")
console.log(spacify("hello world"), "h e l l o   w o r l d")

function solve(s) {
	let curr = 0
	let max = 0
	for (let i = 0; i < s.length; i++) {
		if ("aeiou".includes(s[i])) {
			curr++
			if (curr > max) {
				max = curr
			}
		} else {
			curr = 0
		}
	}
	return max
}

console.log(solve("ultrarevolutionariees"), 3)
console.log(solve("strengthlessnesses"), 1)

function oddOnesOut(nums) {
	let obj = {}
	let arr = []
	for (let i = 0; i < nums.length; i++) {
		let elem = nums[i]
		obj[elem] ? (obj[elem] += 1) : (obj[elem] = 1)
	}

	for (let i = 0; i < nums.length; i++) {
		if (obj[nums[i]] % 2 === 0) {
			arr.push(nums[i])
		}
	}
	return arr
}

console.log(
	oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]),
	[100, 100, 100, 100]
)
console.log(
	oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50]),
	[44, 79, 50, 44, 79, 50]
)

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

function highAndLow(numbers){
  let arr=numbers.split(' ')
  let min=Math.min(...arr)
  let max= Math.max(...arr)
  return max+' '+ min
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");

