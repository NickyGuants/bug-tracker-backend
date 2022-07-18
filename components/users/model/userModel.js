const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please enter your full name'],
	},
	email: {
		type: String,
		required: [true, 'Please enter an email address'],
		unique: true,
		lowercase: true,
		validate: [validator.isEmail, 'Please provide a valid email address'],
	},
	password: {
		type: String,
		required: [true, 'Please provide a password'],
		minlength: 8,
		select: false,
	},
	confirm_password: {
		type: String,
		required: [true, 'Confirm your password'],
		validate: {
			validitor: function (el) {
				return el === this.password;
			},
			message: 'passwords are not the same',
		},
	},
	photo: {
		type: String,
		default: 'default.jpg',
	},
	role: {
		type: String,
		default: 'developer',
		enum: ['developer', 'end-user', 'maintainer'],
	},
});

//document middleware
//hash the password before saving it to the database
userSchema.pre('save', async function (next) {
	this.password = await bcrypt.hash(this.password, 12);
	this.confirm_password = undefined;
	next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
