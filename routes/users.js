const router = require('express').Router();
const controllers = require('../controllers');

router.get('/I/want/title/', controllers.user.getAdressesWithCallback);

module.exports = router;
