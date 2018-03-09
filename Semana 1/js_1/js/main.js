

// Devuelve EL NOMBRE del mayor de los tres
function quienEsMayorDeLosTres(p1, p2, p3) {
    console.log('El objeto P1 es el siguiente ');
    console.log(p1);
    //Mejor parsear los valores antes de usar
    var p1Edad = parseInt(p1.age);
    var p2Edad = parseInt(p2.age);
    var p3Edad = parseInt(p3.age);
    //
    if (p1.age > p2.age && p1.age > p3.age) {
        return p1.name;
    } else if (p2.age > p1.age && p2.age > p3.age)
        return p2.name;
    else if (p3.age > p1.age && p3.age > p2.age) {
        return p3.name;
    } else {
        //añadir caso en el que los 3 tengan la misma edad
        return "Ninguno"
    }
}

// Devuelve en forma de boolean el resultado
// NOTA: las mayúsculas y minúsculas no se consideran distintas
function hayAlgunCorreoRepetido(p1, p2, p3) {

    var e1 = p1.email;
    var e2 = p2.email;
    var e3 = p3.email;

    if (e1 == e2 || e1 == e3 || e2 == e3) {
        return true;
    } else {
        return false;
    }

    //tambien se podría hacer así:
    //retrun (e1 == e2 || e1 == e3 || e2 == e3);

}

// Pregunta al usuario por su edad y devuelve en boolean la respuesta
function elUsuarioEsMayorQueLosTres(p1, p2, p3) {
    var edad = prompt('¿Cual es su edad?');
    var edadP1 = parseInt(p1.age);
    var edadP2 = parseInt(p2.age);
    var edadP3 = parseInt(p3.age);
    edad = parseInt(edad);
    console.log(edad);
    console.log(p1);
    if (edad > edadP1 && edad > edadP2 && edad > edadP3) {
        console.log('usuario es mayor');
        return true;
    }
}

// Devuelve el número de los que tienen correo acabado en gmail.com
// RESTRICCIÓN: Resuélvelo usando los métodos .indexOf() ó .lastIndexOf()
// Deja descomentada solo una de las soluciones

// function cuantosTienenCorreoDeGmailDotCom(p1, p2, p3) {
//     var counter = 0;
//     if (p1.email.indexOf('@gmail.com') != -1) {
//         counter++;
//         console.log('Estoy aquí ' + counter);
//     } if (p2.email.indexOf('@gmail.com') != -1) {
//         counter++;
//     } if (p3.email.indexOf('@gmail.com') != -1) {
//         counter++;
//     }
//     return counter;
// }


// function cuantosTienenCorreoDeGmailDotCom(p1, p2, p3) {
//     var counter = 0;
//     if (p1.email.lastIndexOf('@gmail.com') != -1) {
//         counter++;
//         console.log('Estoy aquí ' + counter);
//     } if (p2.email.lastIndexOf('@gmail.com') != -1) {
//         counter++;
//     } if (p3.email.lastIndexOf('@gmail.com') != -1) {
//         counter++;
//     }
//     return counter;
// }

// RESTRICCIÓN: Resuélvelo usando el método .search()

// function cuantosTienenCorreoDeGmailDotCom(p1, p2, p3) {
//     var counter = 0;
//     if (p1.email.search('@gmail.com') != -1) {
//         counter++;
//         console.log('Estoy aquí ' + counter);
//     } if (p2.email.search('@gmail.com') != -1) {
//         counter++;
//     } if (p3.email.search('@gmail.com') != -1) {
//         counter++;
//     }
//     return counter;
// }


// RESTRICCIÓN: Resuélvelo usando los métodos .substring() ó substr()

// function cuantosTienenCorreoDeGmailDotCom(p1, p2, p3) {
//     var correogmail = 0;
//     var longp1 = p1.email.length;
//     var longp2 = p2.email.length;
//     var longp3 = p3.email.length;

//     if (p1.email.substring(indicentp1, longp1) === "@gmail.com") {
//         correogmail = correogmail + 1;
//     }
//     if (p2.email.substring(indicentp2, longp2) === "@gmail.com") {
//         correogmail = correogmail + 1;
//     }
//     if (p3.email.substring(indicentp3, longp3) === "@gmail.com") {
//         correogmail = correogmail + 1;
//     }* /
//     if (p1.email.substring(p1.email.indexOf("@"), longp1) === "@gmail.com") {
//         correogmail = correogmail + 1;
//     }
//     if (p2.email.substring(p2.email.indexOf("@"), longp2) === "@gmail.com") {
//         correogmail = correogmail + 1;
//     }
//     if (p3.email.substring(p3.email.indexOf("@"), longp3) === "@gmail.com") {
//         correogmail = correogmail + 1;
//     }
//     return correogmail
// }


// RESTRICCIÓN: Plantea otra forma de solucionarlo que no use ninguno de los métodos de arriba




