console.log('data_loader.js')
var todosLosHoteles = [];
var troceados = [];
$.get('data/london.json')
    .then(mostrar)
    .then(crearNavegadorPaginas)
    .catch(algoSalioMal);


function mostrar(hoteles) {
    todosLosHoteles = hoteles;
    troceados = _.chunk(hoteles, 15);
    troceados[0].forEach(hotel => {
        anadirImagen(hotel);
    });
}

function crearNavegadorPaginas() {
    var paginas = troceados.length;
    for (i = 1; i < paginas; i++) {
        anadirBotonesNavegacionPagina(i);
    }
}

function anadirImagen(hotel, index) {
    const card = `<div class="card" >
    <img class="card-img-top" src="${hotel["Hotel Image"].src}" alt="${hotel["Hotel Image"].alt}">
    <div class="card-body">
      <h5 class="card-title">${hotel["Hotel Image"].alt}</h5>
      <p class="card-text">${hotel["Hotel Description"].text}</p>
      <a href="#" class="btn btn-primary">Vamo pa allá</a>
    </div>
  </div>`;
    $('.photo-subgrid').append(card);
}

function anadirBotonesNavegacionPagina(numero) {
    const boton = `<li>
                    <a onclick="pageSelected(event, ${numero})" href="#">${numero}</a>
                   </li>`;
    $('.menu .enlaces').append(boton);
}

function pageSelected(event, numero) {
    event.preventDefault();//Para evitar recargar la página
    $('.photo-subgrid').text("");
    var pocosHoteles = _.chunk(todosLosHoteles, 15);
    pocosHoteles[numero].forEach(hotel => {
        anadirImagen(hotel);
    });
}

function algoSalioMal(error) {
    console.log('Error');
    console.log(error);
}