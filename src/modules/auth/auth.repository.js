const AuthModel = require('./auth.model');

async function create(authData) {
	const auth = await AuthModel.create(authData);

	return auth;
}

async function update(filter, data) {
	const auth = await AuthModel.findOneAndUpdate(filter, data);

	return auth;
}

async function remove(filter) {
	const auth = await AuthModel.findOneAndRemove(filter);

	return auth;
}

module.exports = {
	create,
	update,
	remove,
};
