const mongoose = require('mongoose');

const config = require('../../config');

const logger = require('../../utils/logger');

async function connect() {
	try {
		await mongoose.connect(config.DB.MONGODB_CONNECTION_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		logger.info('Connected to MongoDB');
	} catch (error) {
		logger.error(error.message);
	}
}

module.exports = connect;
