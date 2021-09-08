function truncateString(str, num) {
  return str.length<=num ? str : str.slice(0,num)+'...'
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket","A-tisket a-tasket A green and yellow basket".length+2))
