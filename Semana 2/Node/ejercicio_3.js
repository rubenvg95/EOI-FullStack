// Investiga como recoger por la consola lo que el usuario introduzca (pista: process.stdin). 
// Modifica el ejercicio anterior para que el usuario pueda seguir introduciendo frases y se vayan 
// acumulando los resultados

var letras = {};

process.stdin.setEncoding('utf8');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  //console.log('antes del read');
  const chunk = process.stdin.read();
  //console.log('despues del read');
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
    console.log(aparicionesDeCadaCaracter(chunk));
  }
});

process.stdin.on('end', () => {
  console.log('antes del end');
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
console.log(aparicionesDeCadaCaracter(frase));
console.log("Escriba otra frase")