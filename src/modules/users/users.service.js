const UserModel = require('./users.model');

async function findAll() {
	const users = await UserModel.find({}, { password: 0 });

	return users;
}

module.exports = {
	findAll,
};
