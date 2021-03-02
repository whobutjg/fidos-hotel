const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.pets.index);

router.get('/:id', controllers.pets.show);

router.post('/', controllers.pets.create);

router.put('/:id', controllers.pets.update);

router.put('/:id', controllers.pets.destroy);

module.exports = router;