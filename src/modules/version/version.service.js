const config = require('../../config');

function get() {
	return {
		version: config.SERVER.VERSION,
	};
}

module.exports = {
	get,
};
