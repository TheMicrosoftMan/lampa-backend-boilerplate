const router = require('express').Router();

const userController = require('./users.controller');

router.get('/', userController.findAll);

module.exports = router;
