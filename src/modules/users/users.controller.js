const userService = require('./users.service');

function findAll(req, res) {
	res.promise(userService.findAll());
}

module.exports = { findAll };
