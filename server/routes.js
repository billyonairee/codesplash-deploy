const router = require('express').Router();
const controller = require('./controllers');

router.get('/images', controller.images.get);

router.get('/author/:author', controller.author.get)

module.exports = router;