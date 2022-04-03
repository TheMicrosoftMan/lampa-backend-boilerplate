const router = require('express').Router();

const setNotFoundError = require('./setNotFoundError');

const v1 = require('./v1');

router.use('/api/v1', v1);

// eslint-disable-next-line no-unused-vars
router.use(function (req, res, next) {
	res.promise(setNotFoundError());
});

module.exports = router;
