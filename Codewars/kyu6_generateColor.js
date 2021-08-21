
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
