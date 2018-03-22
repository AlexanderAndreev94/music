const router = require('express').Router();
const controller = require('../controllers/user');

router.get('/users', controller.getAll)
    .get('/users/:id', controller.getOne)
    .post('/users', controller.add)
    .put('/users/:id', controller.update)
    .delete('/users/:id', controller.remove);

module.exports = router;