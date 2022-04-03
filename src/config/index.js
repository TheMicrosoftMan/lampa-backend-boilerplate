const dotenv = require('dotenv');
const path = require('path');

const logger = require('../utils/logger');
const package = require('../../package.json');

const { NODE_ENV } = process.env;

if (!NODE_ENV) {
	logger.error("NODE_ENV is doesn't setup!");

	throw new Error("NODE_ENV is doesn't setup!");
}

logger.info(`NODE_ENV=${NODE_ENV}`);

dotenv.config({
	path: path.resolve(__dirname, '..', '..', `${NODE_ENV}.env`),
});

module.exports = {
	NODE_ENV,

	SERVER: {
		HOST: process.env.HOST,
		PORT: process.env.PORT,
		VERSION: package.version,
	},

	AUTH: {
		AUTH_ACCESS_TOKEN_SECRET: process.env.AUTH_ACCESS_TOKEN_SECRET,
		AUTH_ACCESS_TOKEN_LIFE: process.env.AUTH_ACCESS_TOKEN_LIFE,
		AUTH_REFRESH_TOKEN_SECRET: process.env.AUTH_REFRESH_TOKEN_SECRET,
		AUTH_REFRESH_TOKEN_LIFE: process.env.AUTH_REFRESH_TOKEN_LIFE,
	},

	DB: {
		MONGODB_CONNECTION_URL: process.env.MONGODB_CONNECTION_URL,
	},
};
