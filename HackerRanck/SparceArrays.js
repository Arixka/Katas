function matchingStrings(strings, queries) {
  return queries.map(query =>strings.filter(str=>str===query).length)
}
console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']))
