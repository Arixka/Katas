
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