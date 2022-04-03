const bookService = require('./books.service');

const query = require('../../utils/query');

function findAll(req, res) {
	const queryParams = query.parse(req.query);

	res.promise(bookService.findAll({}, queryParams));
}

function findOne(req, res) {
	const { id } = req.params;

	res.promise(bookService.findOne(id));
}

function create(req, res) {
	res.promise(bookService.create(req.body));
}

function update(req, res) {
	const { id } = req.params;

	res.promise(bookService.update(id, req.body));
}

function remove(req, res) {
	const { id } = req.params;

	res.promise(bookService.remove(id));
}

module.exports = {
	findAll,
	findOne,
	create,
	update,
	remove,
};
