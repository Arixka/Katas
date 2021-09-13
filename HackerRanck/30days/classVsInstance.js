function Person(initialAge) {
	if (initialAge < 0) {
		console.log('Age is not valid, setting age to 0.')
		this.age = 0
	} else {
		this.age = initialAge
	}
	this.amIOld = function () {
		let stm = ''
		if (this.age < 13) {
			stm = 'You are young.'
		} else if (this.age >= 13 && this.age < 18) {
			stm = 'You are a teenager.'
		} else {
			stm = 'You are old.'
		}
		return console.log(stm)
	}
	this.yearPasses = function () {
		this.age = this.age + 1
	}
}

let person= new Person(13)
console.log(person.age)
person.amIOld()
person.yearPasses()
console.log(person.age)
person.yearPasses()

