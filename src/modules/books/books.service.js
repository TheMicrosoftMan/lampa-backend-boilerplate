const createError = require('http-errors');

const booksRepository = require('./books.repository');

async function findAll(filter = {}, queryParams) {
	if (queryParams.search) {
		filter.title = {
			$regex: `.*${queryParams.search}`,
			$options: 'i',
		};
	}

	const { items, count } = await booksRepository.findAll(filter, queryParams);

	return { items, count };
}

async function findOne(id) {
	const book = await booksRepository.findOne(id);

	if (!book) {
		throw createError.NotFound();
	}

	return book;
}

async function create(userData) {
	const createdBook = await booksRepository.create(userData);

	return createdBook;
}

async function update(id, userData) {
	const updatedBook = await booksRepository.update(id, userData, {
		new: true,
	});

	if (!updatedBook) {
		throw createError.NotFound();
	}

	return updatedBook;
}

async function remove(id) {
	const removedBook = await booksRepository.remove(id);

	if (!removedBook) {
		throw createError.NotFound();
	}

	return removedBook;
}

module.exports = {
	findAll,
	findOne,
	create,
	update,
	remove,
};
