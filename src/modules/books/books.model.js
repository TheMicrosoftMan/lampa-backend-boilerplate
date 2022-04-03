const { Schema, model } = require('mongoose');

const { GENRES } = require('./books.constants');

const BookSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		genre: {
			type: String,
			enum: Object.keys(GENRES),
			required: true,
		},
		year: {
			type: Number,
			required: true,
		},
	},
	{
		versionKey: false,
	},
);

module.exports = model('Book', BookSchema);
