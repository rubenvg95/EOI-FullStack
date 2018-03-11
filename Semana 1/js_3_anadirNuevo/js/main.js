var arrayValidados = [];
var primeraCard = $('.lista').html();
var inputNombre;
var inputCorreo;
var inputEdad;

function validador(user) {
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

function getPersonData() {
    var persona = {
        nombre: $(".card:first-child input[name='nombre']").val(),
        correo: $(".card:first-child input[name='correo']").val(),
        edad: $(".card:first-child input[name='edad']").val()
    }
    return persona;
}

function getPersonForm() {
    var persona = {
        nombre: $(".card:first-child input[name='nombre']"),
        correo: $(".card:first-child input[name='correo']"),
        edad: $(".card:first-child input[name='edad']")
    }
    return persona;
}

function multiplicar(persona) {
    $('.row input').prop('disabled', true);
    $('.lista').prepend(primeraCard);
    //console.log('multiplicar(persona) '+ persona.nombre);
    $('.card:nth-child(2) .card-header').text(persona.nombre);
    // The.prepend() method inserts the specified content as the 
    //first child of each element in the jQuery collection(To insert 
    //it as the last child, use.append()).
}

function anadirNuevo() {
    var persona = getPersonData();
    var personaForm = getPersonForm();
    var objetoValidador = validador(persona);
    var errores = objetoValidador.errors
    var correoDuplicado = false;
    clearErrors(personaForm);
    if (objetoValidador.valid) {
        if (arrayValidados.length == 0) {
            arrayValidados.push(persona);
        } else {
            arrayValidados.forEach(element => {
                if (persona.correo === element.correo) {
                    activateRedZone(error = [{ text: 'Correo repetido' }]);
                    personaForm.correo.addClass('is-invalid');
                    correoDuplicado = true;
                    return;
                }
            });
        }

        if (!correoDuplicado) {
            multiplicar(persona);
        }
    } else {
        errores.forEach(error => {
            switch (error.code) {
                case "name_invalid":
                case "name_invalid_min_length":
                    personaForm.nombre.addClass('is-invalid');
                    break;
                case "age_invalid":
                    personaForm.edad.addClass('is-invalid');
                    break;
                case "email_noAt":
                case "email_noAtBeforeAfter":
                case "email_invalid_min_length":
                    personaForm.correo.addClass('is-invalid');
                    break;
                default:
                    console.log('No se, pero la has liado');
            }
        });
        console.log(errores);
        activateRedZone(errores);

    }
}

function activateRedZone(errores) {
    $('#zona').removeClass('d-none');
    var string = "";
    errores.forEach(error => {
        string += '<p>' + error.text + '</p>';
    });
    $('#zona').append(string);
}

function clearErrors(personaForm) {
    $('#zona').addClass('d-none');
    $('#zona').text('');
    personaForm.nombre.removeClass('is-invalid');
    personaForm.correo.removeClass('is-invalid');
    personaForm.edad.removeClass('is-invalid');
}

function buscarPorNombre() {
    var palabra = $('#buscar').val();
    if (palabra != '') {
        console.log('La palabra a buscar es ' + palabra);
    }
    var html = $('.row').html();
    console.log(html);
   


}
