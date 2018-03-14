function pageSelected(event, numero) {
    event.preventDefault();//Para evitar recargar la página
    clearList();
    mostrar(hotelesFiltrados, numero);
    //destacarNumeroIndice(numero + 1);
}

function navigateTo(event, position) {
    event.preventDefault();
    switch (position) {
        case 'first':
            pageSelected(event, 0);
            break;
        case 'previous':
            console.log('El numero marcado actual es el ' + marcado);
            if (marcado > 1) {
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

function buscar(event) {
    event.preventDefault();
    var palabra = $('input[name=buscadorInput]').val().toLowerCase();
    hotelesFiltrados = todosLosHoteles.filter(function (hotel) {
        return (hotel["Hotel Image"].alt.toLowerCase().includes(palabra));
    });
    mostrar(hotelesFiltrados);
}

function markedFavourite(event, nombreHotel) {
    console.log('me llama')
    event.preventDefault();
    hotelesFavoritos.push(nombreHotel);
    var comoString = JSON.stringify(hotelesFavoritos);
    localStorage.setItem("hoteles", comoString);
}

