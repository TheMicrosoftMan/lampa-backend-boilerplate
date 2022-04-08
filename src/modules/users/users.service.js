const usersRepository = require('./users.repository');

async function findAll() {
	const users = await usersRepository.findAll();

	return users;
}

module.exports = {
	findAll,
};
