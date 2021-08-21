
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