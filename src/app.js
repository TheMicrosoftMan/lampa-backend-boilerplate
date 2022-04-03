const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./router');

const logger = require('./utils/logger');
const db = require('./utils/db');

const config = require('./config');
const checkAuth = require('./middlewares/auth/checkAuth');
const promise = require('./middlewares/promise');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(checkAuth());
app.use(promise());

app.use('/', routes);

app.use(errorHandler());

app.listen(config.SERVER.PORT, async () => {
	logger.info(`Server is working on port ${config.SERVER.PORT}`);

	await db.connect();
});
