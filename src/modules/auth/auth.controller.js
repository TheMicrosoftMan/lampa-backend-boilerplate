const authService = require('./auth.service');

function login(req, res) {
	res.promise(authService.login(req.body));
}

function register(req, res) {
	res.promise(authService.register(req.body));
}

function refreshToken(req, res) {
	res.promise(authService.refreshToken(req.body));
}

module.exports = {
	login,
	register,
	refreshToken,
};
