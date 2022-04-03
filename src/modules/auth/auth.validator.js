const Joi = require('joi');

const baseSchema = {
	email: Joi.string().email().required(),
	password: Joi.string().min(5).max(15).required(),
};

const login = Joi.object({
	...baseSchema,
});

const register = Joi.object({
	...baseSchema,
});

const refreshToken = Joi.object({
	refreshToken: Joi.string().required(),
	userId: Joi.string().required(),
});

module.exports = {
	login,
	register,
	refreshToken,
};
