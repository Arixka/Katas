function lonelyinteger(a) {
	return a.filter((elem) => {
		return a.indexOf(elem) === a.lastIndexOf(elem)
	})
}
