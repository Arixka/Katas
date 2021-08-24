function matchingStrings(strings, queries) {
  return queries.map(query =>strings.filter(str=>str===query).length)
}
console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']))

//last version

function matchingStrings(strings, queries) {
  const match = {}
  const result = Array(queries.length)
  strings.forEach(str => {

      if (match[str]) {
          match[str]++;
      } else {
          match[str] = 1;
      }   
  })
  queries.forEach((q, index) => {
      if (match[q]) {
          result[index] = match[q]
      } else {
          result[index] = 0
      }
  })
  console.log(match)
  return result
}

