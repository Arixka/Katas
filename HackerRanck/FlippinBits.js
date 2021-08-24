function flippingBits(n) {
	let bin = n.toString(2) //pasa a binario

	let flipBin = ''

	while (bin.length < 32) {
		//rellenamos con 0
		bin = 0 + bin
	}

	for (let i = 0; i < bin.length; i++) {
		flipBin += bin[i] === '0' ? '1' : '0' //flip
	}
	return parseInt(flipBin, 2) //pasa a int base 2
}
