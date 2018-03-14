function clearList() {
    $('.photo-subgrid').text("");
}

function clearPageNumbers() {
    $('.menu .enlaces').text("");
}

function mostrarCantidadTotalHoteles(number) {
    $('.total-searches').text(`${number} Hoteles encontrados`);
}

function destacarNumeroIndice(numeroADestacar) {
    console.log('destacarNumeroIndice');
    $(`.menu .enlaces li:nth-child(${marcado}) a`).removeClass('actual-page');
    marcado = numeroADestacar;
    console.log(marcado);
    $(`.menu .enlaces li:nth-child(${numeroADestacar}) a`).addClass('actual-page');
}

function anadirImagen(hotel) {
    var card = `<div class="card" >
    <img class="card-img-top" src="${hotel["Hotel Image"].src}" alt="${hotel["Hotel Image"].alt}">
    <div class="card-body">
      <h5 class="card-title">${hotel["Hotel Image"].alt}</h5>
      <p class="card-text">${hotel["Hotel Description"].text}</p>
      <a onclick="markedFavourite(event, '${hotel["Hotel Image"].alt}')" class="btn btn-primary" >😍</a>
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

function crearNavegadorPaginas() {
    var paginas = troceados.length;
    for (i = 0; i < paginas; i++) {
        anadirBotonesNavegacionPagina(i);
    }
}

function anadirBotonesNavegacionPagina(numero) {
    const boton = `<li>
                    <a onclick="pageSelected(event, ${numero})" href="#">${numero + 1}</a>
                   </li>`;
    $('.menu .enlaces').append(boton);
}