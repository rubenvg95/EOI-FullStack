// Investiga como recoger por la consola lo que el usuario introduzca (pista: process.stdin). 
// Modifica el ejercicio anterior para que el usuario pueda seguir introduciendo frases y se vayan 
// acumulando los resultados

var letras = {};

process.stdin.setEncoding('utf8');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});

function aparicionesDeCadaCaracter(frase = "") {
    var letrasDivididas = frase.split("");
    letrasDivididas.forEach(letra => {
        letras[letra] = 1 + (letras[letra] || 0);
    })
    return letras;
}

const frase = process.argv[2];
console.log(aparicionesDeCadaCaracter(frase))