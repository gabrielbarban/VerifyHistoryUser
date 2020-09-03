// pegando o IP do usuario
$.getJSON('https://gd.geobytes.com/GetCityDetails', function(data) {
  console.log(JSON.stringify(data, null, 2));
})

// criando cookie...
var url = document.referrer.toString().substring(8, 25);
$.cookie("url_origem", url);
var timestamp = new Date().getTime();
$.cookie("timestamp_acesso", timestamp);

console.log("--------")
console.log("URL de origem: "+url);

console.log("--------")
console.log(": "+timestamp);

// api, etc
