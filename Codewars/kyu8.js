function monkeyCount(n) {
	let arr = []
	for (var i = 1; i <= n; i++) {
		arr.push(i)
	}
	return arr
}

console.log(monkeyCount(9), [1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(monkeyCount(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

function noSpace(x) {
	return x.split(" ").join("")
}

console.log(
	noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"),
	"88Bifk8hB8BB8BBBB888chl8BhBfd"
)
console.log(noSpace("8aaaaa dddd r     "), "8aaaaaddddr")

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
	let spend = fuelLeft * mpg
	if (distanceToPump <= spend) {
		//no habia controlado que fueran iguales ¬¬
		return true
	} else if (spend !== distanceToPump) {
		return false
	}
}

console.log(zeroFuel(50, 25, 2), true)
console.log(zeroFuel(100, 50, 1), false)

function between(a, b) {
	let arr = []
	for (var i = a; i <= b; i++) {
		arr.push(i)
	}
	return arr
}

console.log(between(1, 4), [1, 2, 3, 4])
console.log(between(-2, 2), [-2, -1, 0, 1, 2])

function greet(language) {
	let database = {
		english: "Welcome",
		czech: "Vitejte",
		danish: "Velkomst",
		dutch: "Welkom",
		estonian: "Tere tulemast",
		finnish: "Tervetuloa",
		flemish: "Welgekomen",
		french: "Bienvenue",
		german: "Willkommen",
		irish: "Failte",
		italian: "Benvenuto",
		latvian: "Gaidits",
		lithuanian: "Laukiamas",
		polish: "Witamy",
		spanish: "Bienvenido",
		swedish: "Valkommen",
		welsh: "Croeso",
	}

	for (var item in database) {
		if (item === language) {
			return database[item]
		}
	}
	return database["english"]
}

console.log(
	greet("dutch"),
	"Welkom",
	"Your function should have returned 'Welkom'. Try again."
)
console.log(
	greet("IP_ADDRESS_INVALID"),
	"Welcome",
	"Your function should have returned 'Welcome'. Try again."
)

function multiply(a, b){
  return a * b
}

console.log(multiply(1,1), 1);
console.log(multiply(2,1), 2);

function correct(string){
  let arr= string.split('')
  for(let i = 0; i<arr.length; i++){
  if(arr[i]==='5') arr[i]= 'S'
  if(arr[i]==='0') arr[i]= 'O'  
  if(arr[i]==='1') arr[i]= 'I'  
  }
  console.log(arr)
  return arr.join('')
}

console.log(correct("L0ND0N"),"LONDON");
console.log(correct("DUBL1N"),"DUBLIN");

function greet (name, owner) {
  if(name===owner) return 'Hello boss'
  return 'Hello guest'
  
}

console.log(greet('Daniel', 'Daniel'), 'Hello boss')
console.log(greet('Greg', 'Daniel'), 'Hello guest')


function findNeedle(haystack) {
  let res= ''
  haystack.filter((elem, idx) => {
    if(elem === 'needle') return  res = idx  
  })
  return `found the needle at position ${res}`
}

console.log(findNeedle(haystack_1), 'found the needle at position 3')
console.log(findNeedle(haystack_2), 'found the needle at position 5') 