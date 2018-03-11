

////////////////////////////////////////
/////////// Zona ejercicio 1 ///////////
////////////////////////////////////////


function ejercicio01(email) {
    var correos = [];
    var yunior = {
        email: 'yunior.developer@hotmail.com'
    };
    var miguel = {
        email: 'miguel@mrbug.es'
    };
    var imanol = {
        email: 'imanol@mercadona.com'
    };
    correos.push(yunior.email);
    correos.push(miguel.email);
    correos.push(imanol.email);
    var contador = 0;
    for (var x = 0; x < correos.length; x++) {
        if (correos[x] == email) {
            contador++;
        }
    }
    if (contador > 0) {
        return true;
    } else {
        return false;
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 1 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 2 ///////////
////////////////////////////////////////
// Implementa la función ejercicio02 para que devuelva la siguiente frase dependiendo del correo introducido:
// "El correo [correo] tiene [24] caracteres y en mayúsculas se quedaría así [CORREO]. Además [no] contiene [ninguna/2] letras M" 

function ejercicio02(email) {
    var cadena = "El correo " + email + " tiene " + email.length + " caracteres y en mayúsculas se quedaría así " +
        email.toUpperCase();
    var emailLower = email.toLowerCase();
    var contador = 0;
    for (var x = 0; x < emailLower.length; x++) {
        if (emailLower[x] === 'm') { //tambien podemos hacer emailLower[x] en lugar de emailLower.charAt(x)
            contador++;
        }
    }

    if (contador == 0) {
        cadena += ". Además, no contiene ninguna letra M";
    } else {
        cadena += ". Además, contiene " + contador + " letras M";
    }

    return cadena;
}



////////////////////////////////////////
//////// Final zona ejercicio 2 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 3 ///////////
////////////////////////////////////////
// Implementa la función ejercicio03 para que devuelva la siguiente frase dependiendo del correo introducido:
// "El correo [correo] pertenece al dominio [gmail.com] y tiene [X] caracteres sin contar el dominio ni el @. Además, el correo [no] contiene [ningún/X] número[s]" 


function ejercicio03(email) {
    var dominio = "";
    var caracteres = email.length;
    dominio = email.substring(email.indexOf('@') + 1, email.length); //El email.length es opcional
    caracteres = caracteres - 1 - dominio.length;
    var cadena = "El correo " + email + " pertenece al dominio " + dominio + " y tiene " + caracteres + " caracteres sin contar el dominio ni el @." +
        "Además, el correo ";

    var correoSinDominio = email.substring(0, email.indexOf('@'));
    console.log(correoSinDominio);
    var contador = 0;

    //if ("1234567890".indexOf())  solución mas sencilla
    for (var x = 0; x < correoSinDominio.length; x++) {
        if (!isNaN(correoSinDominio.charAt(x))) {
            contador++;
        }
    }
    console.log(contador);
    if (contador == 0) {
        cadena += "no contiene ningún número";
    } else if (contador == 1) {
        cadena += "contiene " + contador + " número";
    } else {
        cadena += "contiene " + contador + " números";
    }

    return cadena;

}


////////////////////////////////////////
/////////// Zona ejercicio 4 ///////////
////////////////////////////////////////
// Implementa la función ejercicio04 para que devuelva la siguiente frase dependiendo de los datos de la persona introducida:
// "El usuario [nombre] [no] es mayor de edad"
// En caso de ser mayor de edad Añade al final de la frase lo siguiente :
// "Por lo tanto, le he creado un usuario con el correo[correo]" 

function ejercicio04(user) {
    console.log(user);
    // correo: "22@ruben.es"
    // edad: "22"
    // nombre: "rube"
    var edadNumber = parseInt(user.edad);
    var cadena = "El usuario " + user.nombre;
    if (edadNumber >= 18) {
        cadena += " es mayor de edad. Por lo tanto, le he creado un usuario con el correo " + user.correo;
    } else {
        cadena += " no es mayor de edad"
    }
    return cadena;
}



////////////////////////////////////////
//////// Final zona ejercicio 4 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 5 ///////////
////////////////////////////////////////

// Implementa la función ejercicio05 para que devuelva alguna de las siguientes frases dependiendo de los datos de la persona introducida:
// "La persona introducida no es Yunior"
// "La persona introducida es Yunior"
// "La persona introducida pudiera ser Yunior. Ya que tiene [el mismo correo / la misma edad / el mismo nombre]" 
function ejercicio05(user) {
    // correo: ""
    // edad: ""
    // nombre: ""
    console.log(user);
    var yunior = {
        correo: 'yunior.developer@hotmail.com',
        edad: 24,
        nombre: "Yunior"
    };

    var nombre = user.nombre;
    var edad = parseInt(user.edad);
    var correo = user.correo;

    var textoDevolver = "La persona introducida pudiera ser Yunior. Ya que tiene";

    if (nombre === yunior.nombre && edad === yunior.edad && correo === yunior.correo) {
        return "La persona introducida es Yunior";
    } else if (nombre != yunior.nombre && edad != yunior.edad && correo != yunior.correo) {
        return "La persona introducida no es Yunior";
    }

    if (nombre === yunior.nombre) {
        textoDevolver += " el mismo nombre";
    }
    if (edad === yunior.edad) {
        textoDevolver += " la misma edad";
    }
    if (correo === yunior.correo) {
        textoDevolver += " el mismo correo";
    }

    return textoDevolver;

}



////////////////////////////////////////
//////// Final zona ejercicio 5 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 6 ///////////
////////////////////////////////////////

// Para los datos de la persona introducida, implementa la función ejercicio06 para que haga lo siguiente:

//     Valida que su nombre tiene mínimo 5 caracteres y un máximo de 60.
//     Valida que su nombre solo contiene letras o espacios.
//     Valida que su email tiene mínimo 7 caracteres y máximo 60.
//     Valida que su email contiene un @ y contenido a la izquierda y a la derecha.
//     Valida que edad es superior a los 5 años y menor de 150.

// La función devolverá un objeto con la siguiente forma :

//                         { 
//                              valid : true/false,
//                              errors? : [
//                             {
//                                     code : 'email_invalid_min_length'
//                                     text : 'El correo [correo] debe contener más de 7 caracteres.'
//                             }, ...
//                             ]
//                         }





////////////////////////////////////////
//////// Final zona ejercicio 6 ////////
////////////////////////////////////////

// Para los datos de la persona introducida, implementa la función ejercicio06 para que haga lo siguiente:




// La función devolverá un objeto con la siguiente forma :

//                         { 
//                              valid : true/false,
//                              errors? : [
//                             {
//                                     code : 'email_invalid_min_length'
//                                     text : 'El correo [correo] debe contener más de 7 caracteres.'
//                             }, ...
//                             ]
//                         }

function ejercicio06(user) {
    var nombre = user.nombre;
    var correo = user.correo;
    var edad = parseInt(user.edad);
    var valido = false;
    var errors = [];
    var error;

    //     Valida que su nombre tiene mínimo 5 caracteres y un máximo de 60.
    if (!(nombre.length >= 5 && nombre.length <= 60)) {
        error = { code: 'name_invalid_min_length', text: 'El nombre ' + nombre + ' debe contener entre 5 y 60 caracteres' };
        errors.push(error);
    }
    //     Valida que su email tiene mínimo 7 caracteres y máximo 60.
    if (!(correo.length >= 7 && correo.length <= 60)) {
        error = { code: 'email_invalid_min_length', text: 'El correo ' + correo + ' debe contener entre 7 y 60 caracteres' };
        errors.push(error);
    }
    //     Valida que edad es superior a los 5 años y menor de 150.
    if (!(edad >= 5 && edad <= 150)) {
        error = { code: 'age_invalid', text: 'O eres muy pequeño o muy viejo' };
        errors.push(error);
    }
    //     Valida que su nombre solo contiene letras o espacios.
    if (!(nombre.match(/^[A-Za-z ]+$/))) {
        error = { code: 'name_invalid', text: 'Tu nombre debe contaner solo letras o espacios' };
        errors.push(error);
    }
    //}

    //     Valida que su email contiene un @ y contenido a la izquierda y a la derecha.
    var index = correo.lastIndexOf('@');
    if (index == -1) {
        error = { code: 'email_noAt', text: 'Tu correo no contiene @' };
        errors.push(error);
    } else if (!(index - 1 >= 0 && index + 1 <= correo.length - 1)) {
        error = { code: 'email_noAtBeforeAfter', text: 'Tu correo no contiene nada antes o despues del arroba' };
        errors.push(error);
    }

    if (errors.length == 0) {
        valido = true;
    } else {
        valido = false;
    }

    var objeto = {
        valid: valido,
        errors
    }

    return objeto;

}

////////////////////////////////////////
/////////// Zona ejercicio 7 ///////////
////////////////////////////////////////

// […]
// 0: {…}
// correo: "a@"
// ​​edad: "1"
// ​​nombre: "a"
// ​​__proto__: Object { … }
// ​1: {…}
// ​​correo: "b@"
// ​​edad: "2"
// ​​nombre: "b"
// ​​__proto__: Object { … }
// ​2: {…}
// ​​correo: "c@"
// ​​edad: "3"
// ​​nombre: "c"
// ​​__proto__: Object { … }
// ​length: 3
// ​__proto__: Array []

// Para los datos de las personas introducidas, implementa la función ejercicio07 para que haga lo siguiente.

// Esta vez recibirás un array con las tres personas. Y tu función deberá de validar cada persona por separado. En caso de que sea un usuario válido por lo que hemos definido en el ejercicio06 entonces lo guardarás dentro de un array. Antes de guardarlo en el array, le crearás el atributo id : number con un identificador único para él (usa su posición en el array incrementada en 1). Una vez hayas introducido a los usuarios que eran válidos y comprobados los que no son válidos tu función deberá devolver un Objeto con la siguiente forma :

//                             {
//                                 items_inserted  : number,
//                                 ids  : number[],
//                                 with_errors?  : [
//                                     {

//                                     }, ...
//                                 ],
//                                 users_stored  : user[] 
//                             }


// De manera, que si pulsamos varias veces en el botón de iniciar con nuevos datos de personas, se irán mostran todos los nuevos usuarios . 

function ejercicio07(users) {
    var arrayValidados = [];
    var arrayUsersErrors = [];
    var ids = [];
    for (var x = 0; x < users.length; x++) {
        var user = users[x];
        var objetoDevueltoEje6 = ejercicio06(user);
        if (objetoDevueltoEje6.valid) {
            var objetoValidado = {
                id: x + 1,
                nombre: user.nombre,
                edad: user.edad,
                correo: user.correo
            }
            ids.push(objetoValidado.id)
            arrayValidados.push(objetoValidado);
        } else {
            user.errors = objetoDevueltoEje6.errors;
            arrayUsersErrors.push(user);
        }
    }
    var objetoADevolver = {
        items_inserted: arrayValidados.length,
        ids: ids,
        with_errors: arrayUsersErrors,
        user_stored: arrayValidados
    }
    return objetoADevolver;
}



////////////////////////////////////////
//////// Final zona ejercicio 7 ////////
////////////////////////////////////////
