console.log('data_loader.js')
var todosLosHoteles = [];
var hotelesFiltrados = [];
var troceados = [];
var marcado = 0;

$.get('data/london.json')
    .then(cargar)
    .catch(algoSalioMal);


function cargar(hoteles) {
    //Quitamos los elementos repetidos
    //Lo ideal hubiese sido "limpiar" los datos al cargarlos
    //y quedarnos solo con la info que necesitamos.
    hoteles = _.uniqBy(hoteles, hotel => {
        return hotel["Hotel Image"].alt;
    });
    todosLosHoteles = hoteles;
    hotelesFiltrados = hoteles;
    mostrar(hoteles);
}

function mostrar(hoteles, pagina = 0) {
    clearList();
    clearPageNumbers();
    mostrarCantidadTotalHoteles(hoteles.length);
    troceados = _.chunk(hoteles, 15);
    troceados[pagina].forEach(hotel => {
        anadirImagen(hotel);
    });
    crearNavegadorPaginas();
    destacarNumeroIndice(pagina + 1);
}

function crearNavegadorPaginas() {
    var paginas = troceados.length;
    for (i = 0; i < paginas; i++) {
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
    </div>`;
    if (hotel["Reviews Core 4"] != undefined) {
        card += `<div class="rating-box"><div class="box green">Nota: ${hotel["Reviews Core 4"].text}</div><div class="comments">${hotel["Reviews Core 3"].text}</div></div>
      </div>`;
    } else {
        card += `<div class="rating-box"><div class="box">Nota: No calificado</div><div class="comments">Sin comentarios 💩</div></div>
        </div>`
    }
    $('.photo-subgrid').append(card);
}

function anadirBotonesNavegacionPagina(numero) {
    const boton = `<li>
                    <a onclick="pageSelected(event, ${numero})" href="#">${numero + 1}</a>
                   </li>`;
    $('.menu .enlaces').append(boton);
}

function pageSelected(event, numero) {
    event.preventDefault();//Para evitar recargar la página
    clearList();
    mostrar(hotelesFiltrados, numero);
    //destacarNumeroIndice(numero + 1);
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
    console.log('destacarNumeroIndice');
    $(`.menu .enlaces li:nth-child(${marcado}) a`).removeClass('actual-page');
    marcado = numeroADestacar;
    console.log(marcado);
    $(`.menu .enlaces li:nth-child(${numeroADestacar}) a`).addClass('actual-page');
}

function navigateTo(event, position) {
    event.preventDefault();
    switch (position) {
        case 'first':
            pageSelected(event, 0);
            break;
        case 'previous':
            console.log('El numero marcado actual es el ' + marcado);
            if (marcado >1) {
                pageSelected(event, marcado - 2);
            }
            break;
        case 'next':
            if (marcado < troceados.length) {
                pageSelected(event, marcado);
            }
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
    mostrar(hotelesFiltrados);
}

function mostrarCantidadTotalHoteles(number) {
    $('.total-searches').text(`${number} Hoteles encontrados`);
}

function ordenarPor(event) {
    event.preventDefault();
    var valor = $('input:radio[name=ordenarPor]:checked').val();
    switch (valor) {
        case 'mejorValorados':
            hotelesFiltrados = mejorValorados();
            break;
        case 'mayorComentarios':
            hotelesFiltrados = mayorComentarios();
            break;
        case 'top10':
            hotelesFiltrados = top10();
            break;
    }
    mostrar(hotelesFiltrados);
}

function filtrarPorNota(event) {
    event.preventDefault();
    var valorSlider = $('#slider').val();
    buscar(event);
    hotelesFiltrados = mejorValorados();
    hotelesFiltrados = hotelesFiltrados.filter(hotel => parseFloat(hotel["Reviews Core 4"].text) >= valorSlider);
    mostrar(hotelesFiltrados);
}

function mejorValorados() {
    let hoteles;
    if (hotelesFiltrados.length != 0) {
        hoteles = hotelesFiltrados;
    } else {
        hoteles = todosLosHoteles;
    }
    hoteles = limpiarSinValoracion(hoteles)
    hoteles = _.orderBy(hoteles, (hotel) => {
        return parseFloat(hotel["Reviews Core 4"].text);
    }, [`desc`]);
    return hoteles;
}

//Da la causalidad que los que no tienen valoracion tampoco tienen comentarios
//por lo esta función te limpia los sin comentarios/sin valoracion
function limpiarSinValoracion(hoteles) {
    var hotelesConValoracion = [];
    hoteles.forEach(hotel => {
        if (hotel["Reviews Core 4"] != undefined) {
            hotelesConValoracion.push(hotel);
        }
    });
    return hotelesConValoracion;
}

function mayorComentarios() {
    let hoteles;
    if (hotelesFiltrados.length != 0) {
        hoteles = hotelesFiltrados;
    } else {
        hoteles = todosLosHoteles;
    }
    hoteles = limpiarSinValoracion(hoteles)
    hoteles = _.orderBy(hoteles, (hotel) => {
        return parseFloat(hotel["Reviews Core 3"].text.replace(',', ''));
    }, ['desc']);
    return hoteles;
}

function top10() {
    var ordenadosPuntuacion = mejorValorados();
    var top10 = [];
    for (i = 0; i < 10; i++) {
        top10.push(ordenadosPuntuacion[i]);
    }
    return top10;
}

