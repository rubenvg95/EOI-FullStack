const express = require('express');
const morgan = require('morgan');
const app = express();
const imagesRouter = require('./api/images/index.js');
const functions = require('./api/utils/functions.js');
const cors = require('cors')
app.use(cors());
app.use(express.json());

app.use(morgan('combined'));
app.use('/api/images', imagesRouter);

app.listen(5000, (err) => {
    console.log('servidor escuchando en el puerto 5000');
});