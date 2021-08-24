function processData(input) {
  //Enter your code here
  
  //console.log(typeof input)
  
  let inputs = input.split('\n').slice(1)
  //console.log(inputArr)
  
  let arrRes = []
  let strRes = ''
  let max = 0
  
  for (var i = 0; i < inputs.length; i++) {
      
      let type = +inputs[i][0]
      let query = +inputs[i].slice(2)
      
      switch(type) {
          case 1:
              arrRes.push(query)
              if (query > max) max = query               
              break;
          case 2:
              if (arrRes.pop() === max) {
                  max = Math.max.apply(null, arrRes);
              }
              break
          default: strRes += max + '\n'
      }
      
  }

  console.log(strRes.trim())

  
} 

process.stdin.resume()
process.stdin.setEncoding("ascii")
_input = ""
process.stdin.on("data", function (input) {
  _input += input
});

process.stdin.on("end", function () {
 processData(_input)
})
