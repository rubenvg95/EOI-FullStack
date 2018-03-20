// MINIEJERCICIOS

//Modifica el código anterior de manera que si el usuario 
//introduce el flag --novocals no se tengan en cuenta las vocales

//Modifica el código anterior de manera que si el usuario introduce el 
//flag --onlywords se cuentan las apariciones de las distintas palabras

var argv = require('minimist')(process.argv.slice(2));

var letras = {};
var letrasDivididas;

function aparicionesDeCadaCaracter(frase = "", noVocals = false, onlyWords = false) {
    if (onlyWords) {
        letrasDivididas = frase.split(" ");
    } else {
        letrasDivididas = frase.split("");
    }
    letrasDivididas.forEach(letra => {
        if (noVocals && !letra.match(new RegExp('aeiou','gi'))) {
            console.log('me llama')
            letras[letra] = 1 + (letras[letra] || 0);
        } else {
            letras[letra] = 1 + (letras[letra] || 0);
        }
    })
    return letras;
}

const frase = process.argv[2];
console.log(aparicionesDeCadaCaracter(frase, argv.novocals, argv.onlywords));

