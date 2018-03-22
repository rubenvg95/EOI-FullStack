const router = require('express').Router();
const controller = require('./users.controller');

router.get('/', controller.getAllUsers)

router.post('/', controller.createNewUSer);

router.delete('/:username', controller.removeUser);

router.patch('/:username', controller.modifyUser);

router.get('/:username', controller.getUser);

module.exports = router