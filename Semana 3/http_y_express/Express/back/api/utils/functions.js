const urlData = 'data/users.json'
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Twitter');

var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'El campo username es necesario']
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    register: {
        type: Number
    },
    tweets: [{
        owner: String,
        text: {
            type: String,
            require: [true, 'Tienes que escribir algo']
        },
        createdAt: Number
    }],
    versionKey: false,
});

var user = mongoose.model('users', userSchema);

module.exports = {
    users: user,
    saveUser: saveUser,
    checkUser: checkUser
}

function saveUser(newUser) {
    // if (checkUser(newUser) || newUser.email == "") {
    if (false) {
        return false;
    } else {
        var usuario = new user({
            username: newUser.username,
            name: newUser.name,
            email: newUser.email,
            register: Date.now(),
            tweets: newUser.tweets
        })
        console.log(usuario);
        //var error = usuario.validateSync();
        user.create({}, (err, usuario) => {
            console.log('por aqui si pasa')
            return true;
        })
        return true;
    }
}

function checkUser(usuario) {
    // if (users.some(user => user.username == usuario.username) || usuario.email == "") {
    //     return true;
    // } else {
    //     return false;
    // }
    user.find({ username: usuario.username }, (err, res) => {
        console.log(res);
    })
}
