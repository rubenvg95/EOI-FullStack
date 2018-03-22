// Deberán estar implementadas las funcionalidades de:
// Crear un nuevo usuario*
// Borrar un usuario *
// Editar el email de un usuario o el nombre (PATCH)*
// Subir un tweet nuevo por parte de un usuario*
// Ir a buscar un tweet en concreto por su id*
// Borrar un tweet por su id
// Obtener todos los tweets ordenados tanto asc como desc por la fecha de subida
// Dar persistencia a los datos mediante ficheros

//Al inicar el proyecto hacer node init
//npm i [+ nombre del paquete, que puede ser http, express, lodash, fs,,...]


const express = require('express');
const morgan = require('morgan');
const errorhandler = require('errorhandler');
const nodemailer = require('nodemailer');
const notifier = require('node-notifier');
const app = express();
const usersRouter = require('./api/users/index.js')
const tweetsRouter = require('./api/tweets/index.js')
const functions = require('./api/utils/functions.js')
app.use(express.json());


// Cuando se produzca un error en nuestra api le llegue un correo al desarrollador 
// con el error.
// También estaría chulo que si un usuario nos hace más de 20 peticiones POST en una 
// misma sessión no le permitas hacer más peticiones post y nos informes por correo también.
// Hemos visto que hay muchas herramientas para monitorizar logs por ahí :S Investiga e 
// implementa alguna para controlar todo lo que pasa en nuestro server de express https://www.slant.co/options/955/alternatives/~loggly-alternatives



app.use(morgan('combined'));
app.use(errorhandler({ log: errorNotification }));
app.use('/api/users', usersRouter);
app.use('/api/tweets', tweetsRouter);

function errorNotification(err, str, req) {
    var title = 'Error in ' + req.method + ' ' + req.url;

    notifier.notify({
        title: title,
        message: str
    })
}

app.listen(5000, (err) => {
    console.log('servidor escuchando en el puerto 5000');
});