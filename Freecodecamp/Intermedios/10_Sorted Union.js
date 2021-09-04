//SORTED UNION
function uniteUnique(arr) {
	let newArr=[]
  let arg=[...arguments]
  //console.log(arg)
  for(let i=0; i<arg.length; i++){
    for(let j=0; j<arg[i].length; j++){
      if(newArr.indexOf(arg[i][j])=== -1){
        newArr.push(arg[i][j])
        
        }
     }
   }

  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
