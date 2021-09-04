//CONVERT HTML
function convertHTML(str) {
let str2=str.split('')
//console.log(str2)
  for(let i= 0; i< str2.length; i++){
    switch (str2[i]) {
      case '&':
       str2[i] = '&amp;';
        break;
      case '<':
       str2[i] = '&lt;';
        break;
      case '>':
       str2[i] = '&gt;';
        break;
      case '"':
       str2[i] = '&quot;';
        break;
      case "\'":
       str2[i] = '&apos;';
        break;
    }
  }
  return str2.join('')
}


convertHTML("Dolce & Gabbana");//Dolce &amp; Gabbana
//convertHTML("Hamburgers < Pizza < Tacos") // Hamburgers &lt; Pizza &lt; Tacos.
//convertHTML("Sixty > twelve") // Sixty &gt; twelve.