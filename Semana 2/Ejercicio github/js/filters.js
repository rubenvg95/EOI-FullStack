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