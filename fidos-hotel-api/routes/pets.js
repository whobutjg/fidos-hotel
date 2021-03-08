const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../middleware/auth');

// CURRENT PATH = "/api/v1/pets"
router.get('/', auth, controllers.pets.index);

router.get('/:id', auth, controllers.pets.show);

router.post('/', auth, controllers.pets.create);

router.put('/:id', auth, controllers.pets.update);

router.delete('/:id', auth, controllers.pets.destroy);

module.exports = router;