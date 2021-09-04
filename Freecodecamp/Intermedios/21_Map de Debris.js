//ORBITA
function orbitalPeriod(arr) { //delocos
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let resultOrbit=[]
  arr.forEach(function(item){
    let translateItem={}

    let twoTimePie=Math.PI*2
    let earthRadiusPlusAverageAltitude= earthRadius+item.avgAlt
    let topOfDivider= earthRadiusPlusAverageAltitude**3
    let numerToSquare=topOfDivider/ GM
    let squareResult=Math.sqrt(numerToSquare)
    let orbitalPeriodResult=twoTimePie*squareResult

    translateItem.name=item.name
    translateItem.orbitalPeriod=Math.round(orbitalPeriodResult)
 

    resultOrbit.push(translateItem)
    //iteramos a traves de cada name
  });
  //propiedad avgAlt : --> orbitalPeriod
  return resultOrbit;
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))