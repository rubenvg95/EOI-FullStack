var todosLosHoteles = [];
var hotelesFiltrados = [];
var troceados = [];
var marcado = 0;
var hotelesFavoritos = [];

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
    if(hoteles.length!=0){
        troceados[pagina].forEach(hotel => {
            anadirImagen(hotel);
        });
    }
    crearNavegadorPaginas();
    destacarNumeroIndice(pagina + 1);
}

function algoSalioMal(error) {
    console.error(error);
}



