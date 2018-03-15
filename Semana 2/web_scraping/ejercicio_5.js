var axios = require('axios');
const cheerio = require('cheerio')
//Crea un array con los datos de los distintos smartphones que te encuentres 
//en la primera página de la categoría smartphones. Haz de recoger mínimo nombre, 
//foto, descripción y precio
var urlMM = 'https://tiendas.mediamarkt.es/smartphones-libres';
const nombres =[];
const fotos = [];
const precios = [];
const descriptions =[];
const arrayMoviles = [];

const arrayProductos = [];

axios.get(urlMM).then(response => {
    //console.log(typeof response.data); // string
    const $ = cheerio.load(response.data);
    // const posBodyInit = response.data.indexOf('<div class="resumePaginator">') ;
    // const posBodyEnd = response.data.indexOf('<div class="pagerContainer">') ;
    // const aux = response.data.substring(posBodyInit,posBodyEnd);
    var todosNombres = $('.productName span').each(function(i, element){
        nombres[i] = $(element).text();
    });
    var todosFotos= $('.product10ImageProduct').each((index, element)=>{
        fotos[index] = $('a img').attr('data-original');
    })
    var todosDescription = $('.product10ShortDescription').each( (index, element)=>{
        descriptions[index] = $(element).text();
    } );
    var todosPrecios = $('.mm-price').each( (index, element)=>{
        precios[index] = $(element).text();
    } );

     for(i=0;i<nombres.length;i++){
         var movil = {};
         movil ={
             nombre: nombres[i],
             foto: fotos[i],
             description: descriptions[i],
             precio: precios[i]
         }
        arrayMoviles.push(movil);
     }
console.log(arrayMoviles);
     
})
