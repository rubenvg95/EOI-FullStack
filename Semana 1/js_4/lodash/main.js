//Ejercicio 1
// Tenemos un array con múltiples objetos que incluyen un atributo con un 
//código postal. Crea un array que incluya sólo los códigos postales. PD: los 
//códigos postales no pueden repetirse.

let provincias = [
    {nombre: 'Madrid', codigoPostal: '28223'},
    {nombre: 'Albacete', codigoPostal: '02653'},
    {nombre: 'Madrid', codigoPostal: '28223'},
    {nombre: 'Las Palmas', codigoPostal: '35118'},
    {nombre: 'Barcelona', codigoPostal: '08480'},
    {nombre: 'Madrid', codigoPostal: '28001'},
    {nombre: 'Barcelona', codigoPostal: '08480'},
];

var zipCodes = provincias.map(provincia => provincia.codigoPostal);
//Devuelve una copia con los CP no repetidos
var repetedZipCode = _.uniq(zipCodes);

//console.log(repetedZipCode);

//Ejercicio2
//Tenemos una serie de servidores que almacenan diferentes tipos de 
//archivos. Muestra un array con los nodos que almacenan archivos mp4 
//y png. Si hay nodos que se repiten sólo deben salir una vez.
let servidores = [
    {
        almacenan: '.mp4',
        nodos: ['ordenador1','ordenador2','ordenador3']
    },{
        almacenan: '.mp3',
        nodos: ['ordenador2','ordenador5']
    },{
        almacenan: '.json',
        nodos: ['ordenador1','ordenador4','ordenador6']
    },{
        almacenan: '.png',
        nodos: ['ordenador1', 'ordenador4']
    },{
        almacenan: '.avi',
        nodos: ['ordenador1','ordenador7']
    },
];


// var arraysNodos = servidores.map(tipoArchivo);
var arraysNodos = servidores.filter(tipoArchivo);

function tipoArchivo(elemento){
    if(elemento.almacenan == '.mp4' || elemento.almacenan=='.png'){
        //console.log(elemento.nodos);
        return true;
    }else{
        return false;
    }
}
// function tipoArchivo(elemento){
//     if(elemento.almacenan == '.mp4' || elemento.almacenan=='.png'){
//         //console.log(elemento.nodos);
//         return elemento.nodos;
//     }
// }
console.log(arraysNodos);

// console.log(_.uniq(_.flatten(arraysNodos)));
