console.log('data_loader.js')
var todosLosHoteles = [];
var hotelesFiltrados = [];
var troceados = [];
var marcado = 1;

$.get('data/london.json')
    .then(cargar)
    .catch(algoSalioMal);


function cargar(hoteles) {
    todosLosHoteles = hoteles;
    hotelesFiltrados = hoteles;
    mostrar(hoteles);
    crearNavegadorPaginas();
}

function mostrar(hoteles, pagina=0) {
    mostrarCantidadTotalHoteles(hoteles.length);
    troceados = _.chunk(hoteles, 15);
    troceados[pagina].forEach(hotel => {
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
    var card = `<div class="card" >
    <img class="card-img-top" src="${hotel["Hotel Image"].src}" alt="${hotel["Hotel Image"].alt}">
    <div class="card-body">
      <h5 class="card-title">${hotel["Hotel Image"].alt}</h5>
      <p class="card-text">${hotel["Hotel Description"].text}</p>
      <a href="#" class="btn btn-primary">Vamo pa allá</a>
    </div>
    <div class="rating-box"><div class="box">Nota: No calificado</div><div class="comments">Sin comentarios</div></div>
  </div>`;
    if (hotel["Reviews Core 4"] != undefined) {
        card = `<div class="card" >
        <img class="card-img-top" src="${hotel["Hotel Image"].src}" alt="${hotel["Hotel Image"].alt}">
        <div class="card-body">
          <h5 class="card-title">${hotel["Hotel Image"].alt}</h5>
          <p class="card-text">${hotel["Hotel Description"].text}</p>
          <a href="#" class="btn btn-primary">Vamo pa allá</a>
        </div>
        <div class="rating-box"><div class="box">Nota: ${hotel["Reviews Core 4"].text}</div><div class="comments">${hotel["Reviews Core 3"].text}</div></div>
      </div>`;
    }

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
    clearList();
    destacarNumeroIndice(numero);
    mostrar(hotelesFiltrados, numero);
    // FUERA DE AQUI !!! USA EL MOSTRAR 
    // var pocosHoteles = _.chunk(hotelesFiltrados, 15);
    // pocosHoteles[numero].forEach(hotel => {
    //     anadirImagen(hotel);
    // });

}

function algoSalioMal(error) {
    console.error(error);
}

function clearList() {
    $('.photo-subgrid').text("");
}

function clearPageNumbers() {
    $('.menu .enlaces').text("");
}

function destacarNumeroIndice(numeroADestacar) {
    $(`.menu .enlaces li:nth-child(${marcado}) a`).removeClass('actual-page');
    marcado = numeroADestacar;
    $(`.menu .enlaces li:nth-child(${numeroADestacar}) a`).addClass('actual-page');
}

function navigateTo(event, position) {
    event.preventDefault();
    switch (position) {
        case 'first':
            pageSelected(event, 1);
            break;
        case 'previous':
            pageSelected(event, marcado - 1);
            break;
        case 'next':
            pageSelected(event, marcado + 1);
            break;
        case 'last':
            pageSelected(event, troceados.length - 1);
            break;
        default:
            console.log('algo salio mal');
    }
}

function buscar(event) {
    event.preventDefault();
    var palabra = $('input[name=buscadorInput]').val().toLowerCase();
    hotelesFiltrados = todosLosHoteles.filter(function (hotel) {
        return (hotel["Hotel Image"].alt.toLowerCase().includes(palabra));
    });
    clearList();
    clearPageNumbers();
    mostrar(hotelesFiltrados);
    crearNavegadorPaginas();
}

function mostrarCantidadTotalHoteles(number) {
    $('.total-searches').text(`${number} Hoteles encontrados`);
}

function ordenarPor(event) {
    event.preventDefault();
    var valor = $('input:radio[name=ordenarPor]:checked').val();
    var hotelesOrdenados = hotelesFiltrados;
    switch (valor) {
        case 'mejorValorados':
        hotelesFiltrados = mejorValorados();
            break;
        case 'mayorComentarios':
            console.log('mayorComentarios');
            break;
        case 'top10':
        console.log('top10');
            break;
    }
    clearList();
    clearPageNumbers();
    mostrar(hotelesFiltrados);
    crearNavegadorPaginas();
}

function mejorValorados() {
    let hoteles;
    if (hotelesFiltrados.length != 0) {
        hoteles = hotelesFiltrados;
    } else {
        hoteles = todosLosHoteles;
    }
    hoteles = limpiarSinValoracion(hoteles)
    console.log('Hoteles limpiados')
    console.log(hoteles)
    hoteles = _.orderBy(hoteles, (hotel) => {
            console.log("Me llama")
            return parseFloat(hotel["Reviews Core 4"].text);
    }, ['desc']);
    console.log('Tecnicamente aqui ya estan ordenados')
    console.log(hoteles);
    return hoteles;
}

function limpiarSinValoracion(hoteles) {
    var hotelesConValoracion = [];
    hoteles.forEach(hotel => {
        if (hotel["Reviews Core 4"] != undefined) {
            hotelesConValoracion.push(hotel);
        }
    });
    console.log(hotelesConValoracion.length)
    return hotelesConValoracion;


}
