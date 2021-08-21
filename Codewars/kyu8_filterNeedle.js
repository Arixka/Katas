function findNeedle(haystack) {
  let res= ''
  haystack.filter((elem, idx) => {
    if(elem === 'needle') return  res = idx  
  })
  return `found the needle at position ${res}`
}

console.log(findNeedle(haystack_1), 'found the needle at position 3')
console.log(findNeedle(haystack_2), 'found the needle at position 5') 