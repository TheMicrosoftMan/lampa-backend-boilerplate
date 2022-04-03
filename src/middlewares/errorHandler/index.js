const handleError = require('../promise/handleError');

function errorHandler() {
	// eslint-disable-next-line no-unused-vars
	return (error, req, res, next) => {
		handleError(res, error);
	};
}

module.exports = errorHandler;
