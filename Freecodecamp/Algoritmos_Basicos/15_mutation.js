function mutation(arr) {
  let first=arr[0].toLowerCase().split('')
  let second=arr[1].toLowerCase().split('')
  for (let i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) < 0) return false
  }
  return true
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])