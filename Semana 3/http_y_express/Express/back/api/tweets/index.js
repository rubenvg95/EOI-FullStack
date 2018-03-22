const router = require('express').Router();
const controller = require('./tweets.controller');


router.post('/:username', controller.postTweet);

router.get('/:id', controller.getTweetById);

router.delete('/:id', controller.deleteTweetById);

router.get('/', controller.getAllTweetsOrdered);

module.exports = router;