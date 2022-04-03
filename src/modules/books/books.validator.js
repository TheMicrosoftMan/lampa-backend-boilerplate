const Joi = require('joi');

const query = require('../../utils/query');
const { objectId } = require('../../utils/validator/constants');

const { GENRES } = require('./books.constants');

const baseSchema = {
	title: Joi.string(),
	author: Joi.string(),
	genre: Joi.string().valid(...Object.keys(GENRES)),
	year: Joi.number().min(1000).max(2022),
};

const findAll = query.validationSchema;

const findOne = Joi.object().keys({
	id: objectId.validationSchema.required(),
});

const create = Joi.object({
	title: baseSchema.title.required(),
	author: baseSchema.author.required(),
	genre: baseSchema.genre.required(),
	year: baseSchema.year.required(),
});

const update = Joi.object({
	...baseSchema,
});

const remove = findOne;

module.exports = {
	findAll,
	findOne,
	create,
	update,
	remove,
};
