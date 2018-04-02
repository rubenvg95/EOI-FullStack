const mongodb = require('mongodb');

mongodb.connect('mongodb://localhost', function (err, client) {
    if (err) return console.error(err);
    const db = client.db('pruebas');
    console.log("Connected successfully to server");

    const todosCollection = db.collection('todos');
    todosCollection.find({}).toArray((err, response) => {
        console.log(response);
        client.close();
    })
});