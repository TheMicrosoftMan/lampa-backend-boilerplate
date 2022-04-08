const usersModel = require('./users.model');

async function findAll() {
	const users = await usersModel.find({}, { password: 0 });

	return users;
}

async function findOne(filter) {
	const user = await usersModel.findOne(filter);

	return user;
}

async function create(data) {
	const user = await usersModel.create(data);

	return user;
}

async function isExists(filter) {
	const isExists = await usersModel.exists(filter);

	return isExists;
}

module.exports = {
	findAll,
	findOne,
	create,
	isExists,
};
