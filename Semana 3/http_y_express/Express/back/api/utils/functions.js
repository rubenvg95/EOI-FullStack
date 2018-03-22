const fs = require('fs');
const urlData = 'data/users.json'
var users = JSON.parse(fs.readFileSync(urlData));

module.exports = {
    users: users,
    guid: guid,
    saveUser: saveUser,
    checkUser: checkUser
}

/**
 * Almacenar usuarios en fichero
 *  function cargarUsers(){
    var content = fs.readFileSync(urlData, 'utf-8');
    console.log(JSON.parse(content))
}
 */

function createUserDummy() {
    var user = {
        id: "111",
        username: "admin",
        name: "Administrator",
        email: "admin@micopiafeadetwitter.es",
        register: Date.now(),
        tweets: [
            {
                id: "122",
                text: "Hola mundo",
                owner: "admin",
                createdAt: Date.now(),
            },
            {
                id: "133",
                text: "Adios mundo",
                owner: "admin",
                createdAt: Date.now() + 1,
            }]
    }
    saveUser(user);
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

function saveUser(newUser) {
    if (checkUser(newUser) || newUser.email == "") {
        return false;
    } else {
        var usuario = {
            id: guid(),
            username: newUser.username,
            name: newUser.name,
            email: newUser.email,
            register: Date.now(),
            tweets: newUser.tweets
        }
        users.push(usuario);
        fs.writeFile(urlData, JSON.stringify(users));
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
