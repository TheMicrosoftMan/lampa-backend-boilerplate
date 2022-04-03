const Joi = require('joi');

module.exports = Joi.object().keys({
	limit: Joi.number().min(1).max(100),
	offset: Joi.number().min(0),
	sortBy: Joi.string().max(20),
	orderBy: Joi.number().valid('asc', 'desc'),
	search: Joi.string().max(100),
});
