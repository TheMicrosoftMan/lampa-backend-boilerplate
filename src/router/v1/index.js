const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');

const swagger = require('../../utils/swagger');

const VersionRouter = require('../../modules/version/version.router');
const AuthRouter = require('../../modules/auth/auth.router');
const UserRouter = require('../../modules/users/users.router');
const BookRouter = require('../../modules/books/books.router');

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger.specs));
router.use('/version', VersionRouter);
router.use('/auth', AuthRouter);
router.use('/users', UserRouter);
router.use('/books', BookRouter);

module.exports = router;
