const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../middleware/auth');

// CURRENT PATH = '/api/v1/users
router.post('/login', controllers.users.login);

router.post('/verify', auth, controllers.users.verify);

router.post('/profile', auth, controllers.users.show);

router.post('/',  controllers.users.create);

router.put('/:id', auth, controllers.users.update);

router.delete('/:id', auth, controllers.users.destroy);

module.exports = router;