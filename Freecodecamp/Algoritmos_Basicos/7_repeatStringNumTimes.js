function repeatStringNumTimes(str, num) {
  if(num< 0) return ''
  let res= ''
  for(let i = 0; i<num; i++){
    res += str
  }
  return res
}

console.log(repeatStringNumTimes("abc", 3))

//----------------------------

function repeatStringNumTimes(str, num) {
  if(num< 1) return ''
  return str + repeatStringNumTimes(str, num-1)
}

console.log(repeatStringNumTimes("abc", 3))