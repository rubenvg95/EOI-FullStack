const http = require('http');
const express = require('express');
const _ = require('lodash');
var app = express();
var users = [];
app.use(express.json());
var user = {};
var today = new Date();


function createUserDummy() {
    user = {
        id: guid(),
        username: "admin",
        name: "Administrator",
        email: "admin@micopiafeadetwitter.es",
        tweets: [
            {
                id: guid(),
                text: "Hola mundo",
                owner: "admin",
                createdAt: today,
            },
            {
                id: guid(),
                text: "Adios mundo",
                owner: "admin",
                createdAt: today,
            }]
    }
    users.push(user);
}

createUserDummy();

//By https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

app.get('/users', (req, res) => {
    console.log('Han llamado a users');
    res.send(users);//es lo mismo que poner res.json(users)
})

app.post('/users', function (req, res) {
    const newUser = req.body;
    if (saveUser(newUser)) {
        return res.send(newUser);
    } else {
        return res.send('El usuario ya existe');
    }
});

function saveUser(newUser) {
    if (checkUser(newUser) || newUser.email == "") {
        return false;
    } else {
        var usuario = {
            id: guid(),
            username: newUser.username,
            name: newUser.name,
            email: newUser.email,
            tweets: newUser.tweets
        }
        users.push(usuario);
        return true;
    }
}

function checkUser(usuario) {
    if (users.some(user => user.username == usuario.username) || usuario.email == "") {
        return true;
    } else {
        return false;
    }
}

app.delete('/users/:username', function (req, res) {
    const userNameToDelete = req.params.username;
    console.log(userNameToDelete);
    if (users.some(user => user.username == userNameToDelete) && userNameToDelete != "admin") {
        for (var i = 0; i < users.length; i++) {
            if (users[i].username == userNameToDelete) {
                console.log(users[i].username);
                users.splice(i, 1);
            }
        }
        return res.send(`Vale, elimino al user ${userNameToDelete}`);
    } else {
        return res.send("El usuario a eliminar no existe")
    }
});

app.patch('/users/:username', function (req, res) {
    const dataToUpdate = req.body;
    const name = dataToUpdate.name;
    const email = dataToUpdate.email;
    const userToModify = {
        username: req.params.username
    }
    if (checkUser(userToModify)) {
        if ((name && name.length > 0) && (email && email.length > 0)) {
            users.forEach(user => {
                if (user.username == userToModify.username) {
                    user.name = name;
                    user.email = email;
                    return res.send(`Voy a modificar el nombre de ${user.username} por ${name} y el correo por ${email}`)
                }
            })
        } else if (email && email.length > 0) {
            users.forEach(user => {
                if (user.username == userToModify.username) {
                    user.email = email;
                    return res.send(`Voy a modificar el email de ${user.username} por ${email}`)
                }
            })
        } else if (name && name.length > 0) {
            users.forEach(user => {
                if (user.username == userToModify.username) {
                    user.name = name;
                    return res.send(`Voy a modificar el nombre de ${user.username} por ${name}`)
                }
            })
        } else {
            return res.send('El parámetro solicitado no puede modificarse');
        }
    } else {
        return res.send("El usuario a modificar no existe")
    }
});

app.get('/users/:username', (req, res) => {
    const userToFind = {
        username: req.params.username
    }
    console.log(userToFind);
    if (checkUser(userToFind)) {
        var encontrado = users.find(user => user.username == userToFind.username);
        console.log(encontrado);
        return res.send(encontrado);
    } else {
        return res.send('No se encuntra al usuario')
    }
});

app.post('/tweet/:username', function (req, res) {
    const tweet = req.body;
    const userToAddTweet = {
        username: req.params.username
    }
    if (checkUser(userToAddTweet)) {
        if (tweet.text && tweet.text.length > 0) {
            var usuario = users.find(user => user.username == userToAddTweet.username)
            const introducir = {
                id: guid(),
                text: tweet.text,
                owner: userToAddTweet.username,
                createdAt: today,
            }
            usuario.tweets.push(introducir);
            return res.send('Se ha añadido')
        }
    } else {
        return res.send('Necesitas registrarte para mostrat Tweets')
    }
});


app.get('/tweet/:id', function(req, res){
    const tweetID =  req.params.id;
    var encontrado = [];
    users.forEach(user=>{
        encontrado = user.tweets.find(tweet => tweet.id == tweetID);
    })
    if (encontrado!=null){
        return res.send(encontrado);
    }else{
        return res.send('No hay Tweets con ese ID')
    }
        
})

/** 
var encontrado = users.some(user => user.username == usernameToFind);
var encontrado = users.find(user => user.username == usernameToFind) != null;
var encontrado = users.findIndex(user => user.username == usernameToFind) != -1;
*/
//     users.forEach(user => {
//         if (user.username == usernameToFind) {
//             return res.send(user);
//         } else {

//         }
//     })
// })
// app.get('/books', (req, res)=>{
//     console.log('Han llamado a books');
//     res.send('hola desde books');
// })

// app.get('/userts/:idUser',(req,res)=>{
//     const id = req.params.idUser;
//     console.log(`Me han pedido al usuario${id}`);
//     res.json(users.find(u => u.id == id));  
// })


app.listen(5000, (err) => {
    console.log('servidor escuchando en el puerto 5000');
});