const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		versionKey: false,
	},
);

module.exports = model('User', UserSchema);