const Joi = require('joi');

const objectIdRegexp = /^[0-9a-fA-F]{24}$/;

module.exports = {
	objectId: {
		regexp: objectIdRegexp,
		validationSchema: Joi.string()
			.regex(objectIdRegexp)
			.options({
				messages: {
					'string.pattern.base': 'Wrong id',
				},
			}),
	},
	sortOrders: {
		asc: 'asc',
		desc: 'desc',
	},
};
