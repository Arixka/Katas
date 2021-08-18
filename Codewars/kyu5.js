function anagrams(word, words) {
  const arrW = word.split('').sort().join('')
  let arrNew =[]
    words.forEach((e, i) => {
      if(e.split('').sort().join('')===arrW){
      arrNew.push(e)
      }
    })
  return arrNew
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) // ['aabb', 'bbaa']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])) // []