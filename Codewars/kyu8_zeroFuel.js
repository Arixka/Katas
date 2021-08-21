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
