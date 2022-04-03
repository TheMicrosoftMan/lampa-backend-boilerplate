const router = require('express').Router();

const authController = require('./auth.controller');
const authValidators = require('./auth.validator');

const { validateRequest } = require('../../middlewares/validator');

router.post(
	'/login',
	validateRequest(authValidators.login),
	authController.login,
);

router.post(
	'/register',
	validateRequest(authValidators.register),
	authController.register,
);

router.post(
	'/refresh-token',
	validateRequest(authValidators.refreshToken),
	authController.refreshToken,
);

module.exports = router;
