
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
