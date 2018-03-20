var axios = require('axios');
const cheerio = require('cheerio');
var urlMM = '';

var promesas = [];

for (variable = 1; variable < 6; variable++) {
    promesas.push(obtenerDatos(variable));
}

function obtenerDatos(numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            urlMM = `https://tiendas.mediamarkt.es/smartphones-libres/pagina${numero}`;
            return axios.get(urlMM).then(response => {
                const arrayMoviles = [];
                const $ = cheerio.load(response.data);
                $('.product.product10').each((index, elemento) => {
                    let producto = {};
                    producto.nombre = $(elemento).find('.productName span').text();
                    producto.fotos = $('a img').attr('data-original');
                    producto.description = $('.product10ShortDescription').text();
                    producto.precio = $('.mm-price').text();
                    arrayMoviles.push(producto);
                })
                resolve(arrayMoviles);
            });
        }, 1000 * numero);
    })
}

Promise.all(promesas)
    .then(results=>{
        results.forEach(resultado =>{
            //console.log(resultado.length)
            console.log(resultado)
        })
    })

//El pseudocódigo que dio el es:

// var axios = require('axios');
// var urlMediamarkt = 'https://tiendas.mediamarkt.es/smartphones-libres?perPage=50';

// var promesas = [];
// for (let i = 1; i < 2; i++) {
//     promesas.push(obtenerPagina(i));
// }
// Promise.all(promesas)
//     .then(results => {
//         // Aqui ya tengo todas las promesas resueltas 
//     })
// //**
// /* Hcaer una peticion a axios cada i * 1000 milisegundos
//  /* @param {number} i 
// */
// function obtenerPagina(i) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             return axios.get(urlMediamarkt + i)
//                 then( response => {
//                     resolve(resultado);
//                 })

//         }, 1000 * i);
//     })
// }

