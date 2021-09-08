function confirmEnding(str, target) {

  return str.slice(-target.length)=== target
}

console.log(confirmEnding("Bastian", "n"))

//------------------------------

function confirmEnding(str, target) {
  return str.endsWith(target)
}

console.log(confirmEnding("Bastian", "n"))

