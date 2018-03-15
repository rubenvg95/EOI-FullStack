function aparicionesDeCadaCaracter(frase = "") {
    var letrasDivididas = frase.split("");
    var letras = {};
    letrasDivididas.forEach(letra => {
        //letras[letra] = 1 + (letras[letra] || 0);
        if(letras[letra]){
            letras[letra]++;
        }else{
            letras[letra] = 1;
        }
    })
    return letras;
}

const frase = process.argv[2];
console.log(aparicionesDeCadaCaracter(frase))