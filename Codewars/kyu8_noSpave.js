
function noSpace(x) {
	return x.split(" ").join("")
}

console.log(
	noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"),
	"88Bifk8hB8BB8BBBB888chl8BhBfd"
)
console.log(noSpace("8aaaaa dddd r     "), "8aaaaaddddr")
