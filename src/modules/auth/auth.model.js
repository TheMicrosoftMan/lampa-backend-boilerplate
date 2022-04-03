const { Schema, model } = require('mongoose');

const config = require('../../config');

const AuthSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		refreshToken: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			expires: config.AUTH.AUTH_REFRESH_TOKEN_LIFE,
			required: true,
		},
	},
	{
		versionKey: false,
	},
);

module.exports = model('Auth', AuthSchema);
