
function findLongestWordLength(str) {
  let words= str.split(' ')
  let maxWord= ''
  for(let word of words){
    if(word.length> maxWord.length){
      maxWord= word
    }
  }
  return maxWord.length
 }
 
 console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
 
//----------------------------------

 function findLongestWordLength(str) {
  let words= str.split(' ')
  words.sort((a,b)=>{
    return (b.length-a.length)
  })
  return words[0]
 }
 
 console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
  
//----------------------------------

 function findLongestWordLength(str) {
  let words= str.split(' ')
  let maxLength = 0
  let result = ''
  words.forEach(word =>{
    if(word.length>maxLength){
      maxLength= word.length
      result = word
    }
  })
  return result
 }
 
 console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
 
//----------------------------------

const maxLonger= (a, b)=>{
  return (a.length>b.length) ? a : b
}

function findLongestWordLength(str) {
 let words= str.split(' ')
 return words.reduce(maxLonger)
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

//----------------------------------
//Este encontraria todas las palabras y no solo la primera
function findLongestWordLength(str) {
  let words= str.split(' ')
  let maxLength= Math.max(...words.map(word => word.length))
  return words.filter(word=> word.length=== maxLength)
 }
 
 console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

//----------------------------------

function findLongestWordLength(str) {
  let words= str.split(' ')
  let maxLength = 0
  let maxWords = ['']
  for(let i =0; i<words.length; i++){
    if(words[i].length >= maxLength){
      maxLength = words[i].length
     if(maxWords[maxWords.length-1].length < words[i].length){
       maxWords = []
       maxWords.push(words[i])
     }else {
       maxWords = [...maxWords, words[i]]
     }
    }
  }
 
  return maxWords.join('')
 }
 
 console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

//----------------------------------