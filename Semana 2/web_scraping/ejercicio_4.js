var axios = require('axios');
const cheerio = require('cheerio')
//Desde node realiza una petición get a la categoría de smartphones de mediamarkt 
//y devuelve por consola el número de smartphones que tienen disponible en total, 
//debería de ser cercano a 459 smartphones
//var cheerio = require('cheerio')
var urlMM = 'https://tiendas.mediamarkt.es/smartphones-libres';


axios.get(urlMM).then(response => {
    //console.log(typeof response.data); // string
    const $ = cheerio.load(response.data);
    // const posBodyInit = response.data.indexOf('<div class="resumePaginator">') ;
    // const posBodyEnd = response.data.indexOf('<div class="pagerContainer">') ;
    // const aux = response.data.substring(posBodyInit,posBodyEnd);
    var aux = $('.resumePaginator').text();
    console.log(aux) // string :O

})
