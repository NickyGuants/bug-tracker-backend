const jwt = require('jsonwebtoken');
const User = require('../model/userModel');
const catchAsync = require('../../utils/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
	const newUser = await User.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		confirm_password: req.body.confirm_password,
	});

	res.status(201).json({
		status: 'success',
		data: {
			newUser,
		},
	});
});
