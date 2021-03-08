const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.bookings.index);

router.get('/:id', controllers.bookings.show);

router.post('/', controllers.bookings.create);

router.put('/:id', controllers.bookings.update);

router.delete('/:id', controllers.bookings.destroy);

module.exports = router;