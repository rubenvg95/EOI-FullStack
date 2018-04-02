const functions = require('../utils/functions.js');
var users = functions.users;
saveUser = functions.saveUser;
checkUser = functions.checkUser;

/**
 * GET      /api/users
 * GET      /api/users/:username
 * POST     /api/users
 * DELETE   /api/users/:username
 * PATCH    /api/users/:username
 */

module.exports.getAllUsers = getAllUsers;
module.exports.createNewUSer = createNewUSer;
module.exports.removeUser = removeUser;
module.exports.modifyUser = modifyUser;
module.exports.getUser = getUser;

function getAllUsers(req, res) {
    console.log('getAllUsers')
    users.find({}, (err, response) => {
        res.json(response)
    })
}

function createNewUSer(req, res) {
    console.log('createNewUSer')
    const newUser = req.body;
    console.log(newUser)
    if (saveUser(newUser)) {
        return res.json(newUser);
    } else {
        return res.json('El usuario ya existe');
    }
}

function removeUser(req, res) {
    const userNameToDelete = req.params.username;
    console.log(userNameToDelete);
    if (users.some(user => user.username == userNameToDelete) && userNameToDelete != "admin") {
        for (var i = 0; i < users.length; i++) {
            if (users[i].username == userNameToDelete) {
                console.log(users[i].username);
                users.splice(i, 1);
            }
        }
        return res.json(`Vale, elimino al user ${userNameToDelete}`);
    } else {
        return res.json("El usuario a eliminar no existe")
    }
}

function modifyUser(req, res) {
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
                    return res.json(`Voy a modificar el nombre de ${user.username} por ${name} y el correo por ${email}`)
                }
            })
        } else if (email && email.length > 0) {
            users.forEach(user => {
                if (user.username == userToModify.username) {
                    user.email = email;
                    return res.json(`Voy a modificar el email de ${user.username} por ${email}`)
                }
            })
        } else if (name && name.length > 0) {
            users.forEach(user => {
                if (user.username == userToModify.username) {
                    user.name = name;
                    return res.json(`Voy a modificar el nombre de ${user.username} por ${name}`)
                }
            })
        } else {
            return res.json('El parámetro solicitado no puede modificarse');
        }
    } else {
        return res.json("El usuario a modificar no existe")
    }
}

function getUser(req, res) {
    const userToFind = {
        username: req.params.username
    }
    console.log('getUser')
    users.find({ username: userToFind.username }, (err, response) => {
        res.json(response)
    })
}