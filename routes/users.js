const router = require('express').Router();
const controllers = require('../controllers');

router.get('/I/want/title/', controllers.user.getAdressesWithPromises);

module.exports = router;
