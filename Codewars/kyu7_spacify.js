function spacify(str) {
	return str.split("").join(" ")
}

console.log(spacify("12345"), "1 2 3 4 5")
console.log(spacify("hello world"), "h e l l o   w o r l d")
