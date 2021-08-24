
function timeConversion(s) {


  let hour = parseInt(s.substr(0, 2))
  let time = s.substr(2,6) 


  if(hour === 12 && s.indexOf("PM") === -1) return ('00'+time)

  if (hour <12 && s.indexOf("PM") !== -1){ 
    return (12 + hour + time)
  } else {

    if (hour <10) { 
        return ("0" + hour + time)
    } else {
        return (hour + time)
    } 
}
   
}
