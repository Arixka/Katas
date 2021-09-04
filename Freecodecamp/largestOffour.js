const largestOfFour = (arr) => {
	var arrR = []
	for (var i = 0; i < arr.length; i++) {
		
		var numMax = arr[i][0]
		for (var j = 0; j < arr[i].length; j++) {

			if (arr[i][j] > numMax) {
				numMax = arr[i][j]
			}
		}
		arrR[i] = numMax
	}
	return arrR
}

console.log(
	largestOfFour([
		[4, 5, 1, 3],
		[13, 27, 18, 26],
		[32, 35, 37, 39],
		[1000, 1001, 857, 1],
	])
)
