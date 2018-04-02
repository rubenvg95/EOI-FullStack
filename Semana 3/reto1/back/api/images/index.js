const router = require('express').Router();
const controller = require('./images.controller');

router.post('/', controller.sendImage);

module.exports = router