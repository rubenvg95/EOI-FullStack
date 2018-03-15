var axios = require('axios');
const cheerio = require('cheerio');
var urlMM = 'https://tiendas.mediamarkt.es/smartphones-libres';
const arrayMoviles = [];

axios.get(urlMM).then(response => {

    const $ = cheerio.load(response.data);


    $('.product.product10').each((i, elemento) => {
        let producto = {};
        producto.nombre = $(elemento).find('.productName span').text();
        producto.fotos = $('a img').attr('data-original');
        producto.description = $('.product10ShortDescription').text();
        producto.precio = $('.mm-price').text();
        //console.log(producto.fotos);
        arrayMoviles.push(producto);
    })
    console.log(arrayMoviles);
});
