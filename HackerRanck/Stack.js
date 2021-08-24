
class Stack { //Stack ==== Pila ultimo en entrar, primero en salir el
  constructor(){
    this.items = {}
    this.top = 0
  }
  push(item){
    this.top++
    this.items[this.top] = item
  }
  pop(){
    let deleteItem 
    if(this.top) deleteItem = this.items[this.top]
    delete this.items[this.top]
    this.top--
    return deleteItem
  }
  getSize(){
    return this.top
  }
  isEmpty(){
    return this.top === 0
  }
  peek(){
    return !this.isEmpty() ? this.items[this.top] : null
  }
  print(){
    if (this.isEmpty()) return null
		let result = ""
		for (let i = this.top; i > 0; i--) {
			result += this.items[i] + ' '
		}
		return result 
  }
}

const stack = new Stack()

stack.push('1.ensalada')
stack.push('2.macarrones')
stack.push('3.pizza')

console.log(stack)

console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())

console.log(stack)

console.log(stack.getSize())
console.log(stack.isEmpty())
console.log(stack.peek())

console.log(stack.print())

