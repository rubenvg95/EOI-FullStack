// function generarNumeroAleatorio(min=0,max=100){
//     const min_int = +min;
//     const max_int = +max;
//     return Math.round(Math.random() * (max_int - min_int) + min_int);
// }
// const minUsuario = process.argv[2];
// const maxUsuario = process.argv[3];

function devolverNumeroDeA(frase="", letra=""){
    return `El numero de apariciones de ${letra} es ${frase.match(new RegExp(letra, 'g')).length}`;
}

const fraseUsuario = process.argv[2];
const letraUsuario = process.argv[3]

console.log(devolverNumeroDeA(fraseUsuario,letraUsuario));