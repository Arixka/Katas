function bouncer(arr) {
	return arr.filter(Boolean)
}

console.log(bouncer([7, 'ate', '', false, 9]))

//-----------------------------

function bouncer(arr) {
	let newArray = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) newArray.push(arr[i])
	}
	return newArray
}
console.log(bouncer([7, 'ate', '', false, 9]))

//-----------------------------

function bouncer(arr) {
	return arr.filter((elem) => {
		if (
			typeof elem !== null ||
			typeof elem !== false ||
			typeof elem !== '' ||
			typeof elem !== undefined ||
			typeof elem !== NaN
		) {
			return elem
		}
	})
}

console.log(bouncer([7, 'ate', '', false, 9]))
