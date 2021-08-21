
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
