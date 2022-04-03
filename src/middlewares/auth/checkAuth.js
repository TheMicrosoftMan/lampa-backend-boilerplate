const expressJwt = require('express-jwt');

const getTokenFromHeader = require('./getTokenFromHeader');

const config = require('../../config');

const publicRouter = [
	{ url: '/api/v1/docs/' },
	{ url: /\/api\/v1\/docs\/.+/ },
	{ url: /\/api\/v1\/auth\/.+/, methods: ['POST'] },
	{ url: '/api/v1/users/', methods: ['GET'] },
	{ url: '/api/v1/version/' },
];

function checkAuth() {
	return expressJwt({
		secret: config.AUTH.AUTH_ACCESS_TOKEN_SECRET,
		algorithms: ['HS256'],
		userProperty: 'token',
		getToken: getTokenFromHeader,
	}).unless({
		path: publicRouter,
	});
}

module.exports = checkAuth;
