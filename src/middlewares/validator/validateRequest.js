const createError = require('http-errors');

const { REQUEST_PARAMS } = require('./constants');

const { validate } = require('../../utils/validator');

function validateRequest(schema, property = REQUEST_PARAMS.BODY) {
	return (req, res, next) => {
		const validationResult = validate(schema, req[property]);

		if (validationResult.isValid) {
			next();
		} else {
			const { errors } = validationResult;
			const message = errors.join(',');

			next(createError(400, `Validation error: ${message}`));
		}
	};
}

module.exports = validateRequest;
