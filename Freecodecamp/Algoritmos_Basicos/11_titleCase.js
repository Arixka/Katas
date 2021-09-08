function titleCase(str) {
  let result=  str.split(' ').map(elem=>{
    return elem = elem.charAt(0).toUpperCase()+ elem.slice(1).toLowerCase()
  })
  return result.join(' ')
}

console.log(titleCase("I'm a little tea pot"))