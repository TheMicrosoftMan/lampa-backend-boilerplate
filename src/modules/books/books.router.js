const router = require('express').Router();

const bookController = require('./books.controller');
const bookValidators = require('./books.validator');

const {
	validateRequest,
	constants: { REQUEST_PARAMS },
} = require('../../middlewares/validator');

router.get(
	'/',
	validateRequest(bookValidators.findAll, REQUEST_PARAMS.QUERY),
	bookController.findAll,
);

router.get(
	'/:id',
	validateRequest(bookValidators.findOne, REQUEST_PARAMS.PARAMS),
	bookController.findOne,
);

router.post('/', validateRequest(bookValidators.create), bookController.create);

router.patch(
	'/:id',
	validateRequest(bookValidators.findOne, REQUEST_PARAMS.PARAMS),
	validateRequest(bookValidators.update),
	bookController.update,
);

router.delete(
	'/:id',
	validateRequest(bookValidators.remove, REQUEST_PARAMS.PARAMS),
	bookController.remove,
);

module.exports = router;
