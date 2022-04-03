const config = require('../../config');

const localServerUrl = `${config.SERVER.HOST}:${config.SERVER.PORT}/api/v1`;
const developmentServerUrl = `${config.SERVER.HOST}/api/v1`;
const productionServerUrl = `${config.SERVER.HOST}/api/v1`;

const servers = [localServerUrl, developmentServerUrl, productionServerUrl];

function generateSwaggerConfig() {
	const swagger = {
		swaggerDefinition: {
			openapi: '3.0.3',
			info: {
				version: config.SERVER.VERSION,
				title: 'API Documentation for Example App',
			},
			servers: servers.map((url) => ({ url })),
			components: {
				securitySchemes: {
					bearerAuth: {
						type: 'apiKey',
						in: 'header',
						name: 'Authorization',
					},
				},
			},
			security: [
				{
					bearerAuth: ['read', 'write'],
				},
			],
		},
		apis: ['./src/**/**.swagger.yaml'],
	};

	return swagger;
}

const swaggerConfig = generateSwaggerConfig();

module.exports = swaggerConfig;
