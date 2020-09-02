// exibindo o IP do usuario// exibindo o IP do usuario
$.getJSON('https://gd.geobytes.com/GetCityDetails', function(data) {
  console.log(JSON.stringify(data, null, 2));
})

var url = document.referrer.toString().substring(8, 25);
var timestamp = new Date().getTime();

console.log("--------")
console.log("URL de origem: "+url);

console.log("--------")
console.log(": "+timestamp);

// api, etc
