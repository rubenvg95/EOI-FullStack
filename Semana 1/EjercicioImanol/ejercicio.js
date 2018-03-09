///Ejercicio 1/////////////////////////////
function ejercicio1() {
    var numerostring = prompt('Ingrese un número');
    var numero = parseInt(numerostring);
    var str = "#";
    for (i = 1; i <= numero; i++) {
        console.log(str.repeat(i));
    }
}
//ejercicio1();

///////////Ejercicio2//////////////////////////
var pajaros = [1, 5, 2, 4, 2, 3, 4, 1, 2, 4, 2, 4, 4, 4, 2];
var grupo1 = {
    nombre : "grupo1",
    cantidad : 0
};
var grupo2 = {
    nombre : "grupo2",
    cantidad : 0
};
var grupo3 = {
    nombre : "grupo3",
    cantidad : 0
};
var grupo4 = {
    nombre : "grupo4",
    cantidad : 0
};
var grupo5 = {
    nombre : "grupo5",
    cantidad : 0
};
var array = [grupo1, grupo2, grupo3, grupo4, grupo5];
var mayor = 0;
var contador = 0;
function ejercicio2() {
    pajaros.forEach(pajaro => {
        switch (pajaro) {
            case 1:
                grupo1.cantidad++;
                break;
            case 2:
                grupo2.cantidad++;
                break;
            case 3:
                grupo3.cantidad++;
                break;
            case 4:
                grupo4.cantidad++;
                break;
            case 5:
                grupo5.cantidad++;
                break;
        }
    });

}
function detmayor(){
mayor = Math.max(grupo1.cantidad,grupo2.cantidad,grupo3.cantidad,grupo4.cantidad,grupo5.cantidad);
array.forEach(grupo => {
    if(mayor == grupo.cantidad && contador == 0)
    {
        contador++;
        console.log(grupo.nombre);
    }   
});
}
//ejercicio2();
//detmayor();
//console.log(grupo1, grupo2, grupo3, grupo4, grupo5);
///////// Ejercicio 3//////////////////////////////
var lista = [4,6,5,3,3,1];
//////////Ejercicio 4////////////////////////////
var abecedario = "abcdefghijklmnopqrstuvwxyz";
var palabracifrada;
var palabra = "";
var cifrar = "";
var num = 0;
function ejercicio4(){
    recoger();
    //cifradofrase(cifrado, num);
    for(i=0; i<cifrado.length; i++)
    {
    buscar = abecedario.charAt(abecedario.indexOf(cifrado[i])+num);
    cifrar += buscar;
    }
    console.log(cifrar);
    cifrar = "";
    buscar = "";
}
function recoger(){
    var palabra = prompt("ingrese palabra");
    var numstring = prompt("ingrese numero");
    num = parseInt(numstring);
    palabra = palabra.toLowerCase();
    cifrado = palabra.split("");
}
/*function cifradofrase(cifrado, num){
    
    for(i=0; i = cifrado.length; i++)
    {
    buscar = abecedario.charAt(abecedario.indexOf(cifrado[i])+num);
    cifrar = cifrar + buscar;
    }
    console.log(cifrar);
}*/
ejercicio4();
console.log(cifrar);

ejercicio4();
//////////Ejercicio 5///////////////////////////
s="";
function ejercicio5(){
 var s = prompt("Ingrese una palabra");
 if (reverse(s) === s){
     console.log("Es un palíndromo");
 }
 else{
     console.log("No es un palíndromo");
 }

}
function reverse(s){
    return s.split('').reverse().join("");
}
//ejercicio5();
