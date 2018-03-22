const functions = require('../utils/functions.js')
const _ = require('lodash');
var users = functions.users;
guid = functions.guid;
saveUser = functions.saveUser;
checkUser = functions.checkUser;

/**
 * POST     /api/tweets/:username   ->postTweet
 * GET      /api/tweets/:id         ->getTweetById
 * DELETE   /api/tweets/:id         ->deleteTweetById
 * GET      /api/tweets             ->getAllTweetsOrdered
 */

module.exports.postTweet = postTweet;
module.exports.getTweetById = getTweetById;
module.exports.deleteTweetById = deleteTweetById;
module.exports.getAllTweetsOrdered = getAllTweetsOrdered;

function postTweet(req, res) {
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
                createdAt: Date.now(),
            }
            usuario.tweets.push(introducir);
            saveUser(usuario);
            return res.json('Se ha añadido')
        }
    } else {
        return res.json('Necesitas registrarte para mostrat Tweets')
    }
}


function getTweetById(req, res) {
    const tweetID = req.params.id;
    var encontrado = [];
    users.forEach(user => {
        encontrado = user.tweets.find(tweet => tweet.id == tweetID);
    })
    if (encontrado != null) {
        return res.json(encontrado);
    } else {
        return res.json('No hay Tweets con ese ID')
    }

}


function deleteTweetById(req, res) {
    const tweetID = req.params.id;
    var encontrado = false;
    users.forEach((user, index) => {
        encontrado = user.tweets.filter(tweet => tweet.id != tweetID);
        if (encontrado.length != 0) {
            user.tweets = encontrado;
            return res.json('Eliminado');
        }
    })
    console.log(encontrado);
}


function getAllTweetsOrdered (req, res) {
    const ordenar = req.query.order;
    var allTweets = _.flatten(users.map(user => user.tweets));
    allTweets = _.orderBy(allTweets, ['createdAt'], ordenar)
    return res.json(allTweets);
}