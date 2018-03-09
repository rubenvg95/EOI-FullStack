var URL = "https://jsonplaceholder.typicode.com/photos";

$.get(URL)
    .then(elementosCargados)
    .catch(algoSalioMal);

function elementosCargados(elementos) {

    var trocear = elementos.slice(0, 100); //Nos quedamos con 100 elementos

    trocear.forEach(photo => {
        $('#photo').append(`<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${photo.url}" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>`)
    });
    // for (var i = 0; i < 2; i++) {
    //     $('.image .card .card-img-top').attr('src', elementos[0].url);
    //     $('.image:first-child').clone().appendTo('body');
    //     console.log(elementos[0]);
    // }
}

function algoSalioMal(error) {
    console.log('Algo ha salido mal ' + error);
}