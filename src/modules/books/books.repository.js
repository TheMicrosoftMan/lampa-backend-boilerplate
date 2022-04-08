const BookModel = require('./books.model');

async function findAll(filter = {}, queryParams) {
	const aggregationPipeline = [
		{
			$match: filter,
		},
		{
			$facet: {
				items: [
					{
						$sort: queryParams.sort,
					},
					{
						$skip: queryParams.offset,
					},
					{
						$limit: queryParams.limit,
					},
				],
				count: [
					{
						$count: 'count',
					},
				],
			},
		},
	];
	const aggregationResult = await BookModel.aggregate(aggregationPipeline);

	const books = aggregationResult[0].items;
	const count = aggregationResult[0].count.length
		? aggregationResult[0].count[0].count
		: 0;

	return { items: books, count };
}

async function findOne(id) {
	const book = await BookModel.findById(id);

	return book;
}

async function create(userData) {
	const createdBook = await BookModel.create(userData);

	return createdBook;
}

async function update(id, userData) {
	const updatedBook = await BookModel.findByIdAndUpdate(id, userData, {
		new: true,
	});

	return updatedBook;
}

async function remove(id) {
	const removedBook = await BookModel.findByIdAndRemove(id);

	return removedBook;
}

module.exports = {
	findAll,
	findOne,
	create,
	update,
	remove,
};
