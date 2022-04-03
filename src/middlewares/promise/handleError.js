const logger = require('../../utils/logger');

function handleError(res, error = {}) {
	const statusCode = error.status || 500;

	if (statusCode === 500) {
		logger.error(error.stack);
	}

	return res.status(statusCode).json({ statusCode, message: error.message });
}

module.exports = handleError;
