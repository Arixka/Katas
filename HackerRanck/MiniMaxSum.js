function miniMaxSum(arr) {

	arr.sort()
	const mins = arr.slice(0, -1)
	const maxs = arr.slice(1)

	console.log(
		mins.reduce((a, b) => a + b),
		maxs.reduce((a, b) => a + b)
	)
}
