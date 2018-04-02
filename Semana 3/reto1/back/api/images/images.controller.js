const functions = require('../utils/functions.js');
const router = require('express').Router();
const API_KEY = ''; //Con Google Vision API habilitado
const axios = require('axios');


/**
 * POST     /api/images
 */

module.exports.sendImage = sendImage;

function sendImage(req, res) {
    console.log('sendImage');
    const cuerpo = req.body.foto;
    var foto_sinBase64 = cuerpo;

    axios.post(`https://vision.googleapis.com/v1/images:annotate?key=`,
        {
            "requests": [
                {
                    "image": {
                        "content": foto_sinBase64
                    },
                    "features": [
                        {
                            "type": "TEXT_DETECTION"
                        }
                    ]
                }
            ]
        }
    )
        .then(function (response) {
            // console.log(response);
            // console.log("a", response.responses);
            // console.log("b", response.responses[0]);
            // console.log("c", response.responses[0].fullTextAnnotation);
            console.log("d", response.responses[0].fullTextAnnotation.text);
        })
        .catch(function (error) {
            console.log(error);
        });
    res.json('sendImage executed');
}


