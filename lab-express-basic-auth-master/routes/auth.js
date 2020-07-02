const express = require("express");
const router = express.Router();
// User model
const User = require('../models/user');

// BCrypt to encrypt passwords
const bcrypt = require('bcrypt');
const bcryptSalt = 10;



// SIGN UP

router.get("/auth", (req, res, next) => {
  res.render("./auth/signup");
});

// check if user and psw are not empty
router.post('/signup', (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;
	const salt = bcrypt.genSaltSync(bcryptSalt);
	const hashPass = bcrypt.hashSync(password, salt);

	if (username === '' || password === '') {
		res.render('auth/signup', {
			errorMessage: 'Indicate a username and a password to sign up'
		});
		return;
	}
	// check if user already exist in the DB
	User.findOne({
			username: username
		})
		.then((user) => {
			if (user !== null) {
                console.log(user)
				res.render('auth/signup', {
					errorMessage: 'The username already exists!'
				});
				return;
			}

			const salt = bcrypt.genSaltSync(bcryptSalt);
			const hashPass = bcrypt.hashSync(password, salt);

			User.create({
					username,
					password: hashPass
				})
				.then((result) => {
                    console.log(result)
					res.redirect('/');
				})
				.catch((error) => {
					console.log(error);
				});
		})
		.catch((error) => {
			next(error);
		});
});

// LOGIN

router.get("/login", (req, res, next) => {
  res.render("./auth/login");
});

module.exports = router;
