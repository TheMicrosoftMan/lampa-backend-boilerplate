const { Types } = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authRepository = require('./auth.repository');
const usersRepository = require('../users/users.repository');

const config = require('../../config');
const createError = require('http-errors');

async function login(loginData) {
	const user = await usersRepository.findOne({
		email: loginData.email,
	});

	if (!user) {
		throw createError.Forbidden();
	}

	const isPasswordCorrect = await bcrypt.compare(
		loginData.password,
		user.password,
	);

	if (!isPasswordCorrect) {
		throw createError.Forbidden();
	}

	const { accessToken, refreshToken } = generateJWT({
		id: user._id,
	});

	await authRepository.create({
		user: user._id,
		refreshToken,
	});

	return {
		accessToken,
		refreshToken,
	};
}

async function register(registerData) {
	const isUserExists = await usersRepository.isExists({
		email: registerData.email,
	});

	if (isUserExists) {
		throw createError.Forbidden();
	}

	const saltRounds = 10;
	const passwordHash = bcrypt.hashSync(registerData.password, saltRounds);

	const createdUser = await usersRepository.create({
		email: registerData.email,
		password: passwordHash,
	});

	const { accessToken, refreshToken } = generateJWT({
		id: createdUser._id,
	});

	await authRepository.create({
		user: createdUser._id,
		refreshToken,
	});

	return {
		accessToken,
		refreshToken,
	};
}

async function refreshToken(refreshTokenData) {
	const { accessToken, refreshToken } = generateJWT({
		id: refreshTokenData.userId,
	});

	const auth = await authRepository.update(
		{
			user: new Types.ObjectId(refreshTokenData.userId),
			refreshToken: refreshTokenData.refreshToken,
		},
		{ $set: { refreshToken: refreshToken } },
	);

	if (!auth) {
		throw createError(400, 'Wrong refresh token');
	}

	return {
		accessToken,
		refreshToken,
	};
}

async function logout(userId) {
	await authRepository.remove({
		user: new Types.ObjectId(userId),
	});

	return;
}

function generateJWT(userTokenData) {
	const accessToken = jwt.sign(
		userTokenData,
		config.AUTH.AUTH_ACCESS_TOKEN_SECRET,
		{
			expiresIn: config.AUTH.AUTH_ACCESS_TOKEN_LIFE,
		},
	);

	const refreshToken = jwt.sign(
		userTokenData,
		config.AUTH.AUTH_REFRESH_TOKEN_SECRET,
		{
			expiresIn: config.AUTH.AUTH_REFRESH_TOKEN_LIFE,
		},
	);

	return {
		accessToken,
		refreshToken,
	};
}

module.exports = {
	login,
	register,
	refreshToken,
	logout,
};
