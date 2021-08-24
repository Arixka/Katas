//constructor
//endqueue entramos a la fila
//dequeue salimos de la fila
//getsize tamaño fila
//isEmpty esta vacio?
//peek primer valor de la fila, antes de sacarlo
//print imprimir

class Queue { //Fila primero q entra, primero q sale first in first out
	constructor() {
		this.items = {}
		this.front = 0
		this.end = 0
	}
	enqueue(item) {
		this.items[this.end] = item
		this.end++
	}
	dequeue() {
		if (this.front === this.end) return null
		const data = this.items[this.front]
    delete this.items[this.front]
		this.front++
		return data
	}
	getSize() {
		return this.end - this.front
	}
	isEmpty() {
		return this.getSize() === 0 ? true : false
	}
	peek() {
		if (this.getSize() === 0) return null
		return this.items[this.front]
	}
	print() {
		if (this.getSize() === 0) return null
		let result = ""
		for (let i = this.front; i < this.end; i++) {
			result += this.items[i] + ' '
		}
		return result
	}
}

const queue = new Queue()
queue.enqueue('cerezas') //primero d la fila
queue.enqueue('manzanas')
queue.enqueue('peras')
queue.enqueue('melones')
// queue.enqueue(4)
// queue.enqueue(5)
// console.log(queue)

console.log(queue.dequeue())
console.log(queue.dequeue())
// console.log(queue.dequeue())


// console.log(queue)

console.log(queue.getSize())

// console.log(queue.isEmpty())

 console.log(queue)

// console.log(queue.peek())
console.log(queue.print())
console.log(queue)
