// //console.log(correos);
// //Ejercicio 1: En la base de datos de nuestra empresa hay usuarios con correos 
//acabados en "gmail.com". Encuéntralos y descártalos, son un problema.

// let correos = [
//     { usuario: 'JoseElMaquina', email: 'jose.el.maquina@gmail.com' },
//     { usuario: 'PepeElCorrecto', email: 'pepe@corecto.com' },
//     { usuario: 'JoseLuisDaBest', email: 'joseluis@dabest.com.eu' },
//     { usuario: 'EsteEstaBien', email: 'este@bien.com' },
//     { usuario: 'Elcarterista', email: 'elcarterista20@gmail.com' }
// ];

// var correosNoGmail = correos.filter(usr => !usr.email.endsWith('gmail.com'));

// //console.log(correosNoGmail);

// //Ejercicio 2 Una empresa de robótica tiene diferentes modelos de procesadores y 
//quiere mostrarlos en su web. Cada procesador tiene un atributo que indica la cantidad 
//de operaciones por segundo y otro que indica la tasa de fallos en tanto por ciento. Ordénalos 
//por el número de operaciones por segundo de forma descendente y elimina los que tengan un 
//porcentaje de fallos mayor al 50%.

// let procesadores = [
//     { modelo: 'pentiumII', operacionesPorSegundo: 10500, tasaDeFallos: 15 },
//     { modelo: 'i7', operacionesPorSegundo: 20000, tasaDeFallos: 60 },
//     { modelo: '8086', operacionesPorSegundo: 30, tasaDeFallos: 26.3 },
//     { modelo: 'i3', operacionesPorSegundo: 11389, tasaDeFallos: 58.4 },
//     { modelo: 'i5', operacionesPorSegundo: 15000, tasaDeFallos: 10 },
//     { modelo: 'celeron', operacionesPorSegundo: 200, tasaDeFallos: 80 }
// ]

// var procesadoresMenores50porCiento = procesadores.filter(procesador => procesador.tasaDeFallos > 50);
// //console.log(procesadoresMenores50porCiento.sort());

// //Ejercicio 3 En nuestra página de alojamientos, los usuarios valoran el sitio donde se han 
//quedado dándole una puntuación del 1 al 10. El problema es que no sabemos la media de valoración
//de cada alojamiento. Crea un atributo "media" para cada alojamiento e incluye su valor.

// let alojamientos = [
//     {
//         nombre: 'Bahía Feliz',
//         comentarios: [
//             {
//                 usuario: 'Franz Kartofen',
//                 comentario: 'Gut',
//                 valoracion: 6
//             },
//             {
//                 usuario: 'Ferdinando',
//                 comentario: 'Muy bueno',
//                 valoracion: 9
//             },
//             {
//                 usuario: 'Roberthino',
//                 comentario: 'Molto malo',
//                 valoracion: 3
//             },
//         ]
//     },
//     {
//         nombre: 'Nacho Sol',
//         comentarios: [
//             {
//                 usuario: 'Manolín',
//                 comentario: 'Estuvo chido',
//                 valoracion: 10
//             },
//             {
//                 usuario: 'Solete',
//                 comentario: 'Muy sucio',
//                 valoracion: 2
//             }
//         ]
//     }

// ]

// var alojamientosConAtributoMedia = [
//     {
//         media: 0,
//         ...alojamientos[0]
//     },
//     {
//         media: 0,
//         ...alojamientos[1]
//     }
// ]

//SOLUCION 1
// var media = 0;
// alojamientosConAtributoMedia.forEach(alojamiento => {
//     alojamiento.comentarios.forEach(comentario => {
//         media += comentario.valoracion;
//     });
//     alojamiento.media = media / alojamiento.comentarios.length;
//     media = 0;
// });

//console.log(alojamientosConAtributoMedia);


//SOLUCION 2
// var alojamientosFinal = alojamientosConAtributoMedia.map(media);

// function media(alojamiento){
//     var suma = 0;
//     alojamiento.comentarios.forEach(comentario => {
//         suma += comentario.valoracion;
//     });
//     alojamiento.media = suma /alojamiento.comentarios.length;
//     return alojamiento;
// }


//SOLUCION 3, en este caso no hace falta el spread
// alojamientosConAtributoMedia.forEach(media);

// function media(alojamiento){
//     var suma = 0;
//     alojamiento.comentarios.forEach(comentario => {
//         suma += comentario.valoracion;
//     });
//     alojamiento.media = suma /alojamiento.comentarios.length;
// }

// console.log(alojamientosConAtributoMedia)

//SOLUCION 4 / 
// alojamientos.forEach(
//     alojamiento =>
//     alojamiento.media =
//     alojamiento.comentarios.reduce(
//         (anterior, actual) => anterior + actual.valoracion,
//         0
//     ) /
//     alojamiento.comentarios.length
// );

//Ejercicio 4
// Accede a los ficheros usuarios.json y alojamientos.json.Crea un 
// array que contenga todos los usuarios y para cada uno añádele un array 
// con los alojamientos que ha valorado con su nota.

var usuarios = [
    {
        "nombre": "Gustav Fransua",
        "email": "gustav@gmail.com" 
    },
    {
        "nombre": "Francisco Paco",
        "email": "fran@gmail.com"
    },
    {
        "nombre": "Manolín Vega",
        "email": "vega.manolin@gmail.com"
    },
    {
        "nombre": "Orlando Florencio",
        "email": "orlan@gmail.com"
    },
    {
        "nombre": "Andrea Pérez",
        "email": "andre.perez@gmail.com"
    },
    {
        "nombre": "Floren Hi",
        "email": "crypto@gmail.com"
    },
    {
        "nombre": "Pedro García",
        "email": "pedrogar@gmail.com"
    },
    {
        "nombre": "Elena Ramírez",
        "email": "elenra@gmail.com"
    }
];

var alojamientos = [
    {
     "nombre": "RIU",
     "comentarios": [{
       "usuario": "Manolín Vega",
       "comentario": "Estancia agradable",
       "valoracion": 8.5
     }, {
       "usuario": "Orlando Florencio",
       "comentario": "Bonito el sitio",
       "valoracion": 7
     }, {
       "usuario": "Andrea Pérez",
       "comentario": "Estancia inolvidable",
       "valoracion": 10
     }]
   },
   {
     "nombre": "Nacho Sol",
     "comentarios": [{
       "usuario": "Floren Hi",
       "comentario": "Un lugar para pensar en cryptos y mucho sol",
       "valoracion": 10
     }, {
       "usuario": "Pedro García",
       "comentario": "Decente tirando a bajo",
       "valoracion": 4
     }]
   },
   {
     "nombre": "Hilton",
     "comentarios": [{
       "usuario": "Elena Ramírez",
       "comentario": "Todo fantástico, acorde con el precio",
       "valoracion": 10
     }, {
       "usuario": "Gustav Fransua",
       "comentario": "Best sitio in the world",
       "valoracion": 10
     }, {
       "usuario": "Francisco Paco",
       "comentario": "Lo mejor la comida",
       "valoracion": 9.5
     }]
   },
   {
     "nombre": "El desastrillo",
     "comentarios": [{
       "usuario": "Manolín Vega",
       "comentario": "Chiquita porquería",
       "valoracion": 3
     }]
   }
 ];


var arrayDevuelto = usuarios.map(anadirValoraciones);

function anadirValoraciones(usuario) {
    var array;
    alojamientos.forEach(alojamiento => {
        alojamiento.comentarios.forEach(comentario => {
            if (comentario.nombre === usuario.nombre) {
                if(!usuario.valoraciones){
                    usuario.comentarios.push(alojamiento);
                }
            }
        });
    });

}

console.log(arrayDevuelto);