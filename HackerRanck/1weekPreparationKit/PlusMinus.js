
function plusMinus(arr) {
  // Write your code here
  const positives = arr.filter(e=> e>0).length
  const negatives = arr.filter(e=> e<0).length
  const zeros = arr.filter(e=> e===0).length
  console.log((positives/arr.length))
  console.log((negatives/arr.length))
  console.log((zeros/arr.length))
}