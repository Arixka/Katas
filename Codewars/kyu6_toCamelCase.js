
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
