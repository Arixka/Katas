//CREANDO UN OBJETO PERSONA
var Person = function(firstAndLast) {
  // Cambia solo el código debajo de esta línea
  // Completa el método de abajo e implementa los otros de manera similar
  

  this.getFullName = function() {
    return firstAndLast;
  };
  this.getFirstName= function(){
    return firstAndLast.split(' ')[0]
  };
  this.getLastName= function(newLastName){
    return firstAndLast.split(' ')[1]
  };

  this.setFullName = function(newFullName) {
    return firstAndLast= newFullName ;
  };
  this.setFirstName = function(newFirstName){
    return firstAndLast = newFirstName+" "+this.getLastName() 
  };

  this.setLastName= function(newLastName){
    return firstAndLast= this.getFirstName()+ " "+ newLastName; 
  };


};

var bob = new Person('Bob Ross');
bob.getLastName("Curry");
console.log(bob.getFullName())

//console.log(Object.keys(bob).length)

//console.log(bob.getFirstName())