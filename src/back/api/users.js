const express = require('express');
const users = express.Router();
const bcrypt = require('bcryptjs');
const User = require('./models/users');

users.post('/signup', (req, res) => {
         User.findOne({ email: req.body.email })
            .then(result => {
                if (result === null) {
                    const rounds = 10;
                    var pass = req.body.password;
                    bcrypt.hash(pass, rounds, (err, hash) => {
                        if (err) {
                            return err;
                        } else {
                            const user = new User({
                                name: req.body.name,
                                email: req.body.email,
                                password: hash
                            });

                            user.save(err => {
                                if (err)
                                    res.status(501).json({ error: err }) // 501 Not Implemented
                                else
                                    res.status(200).json({ success: true })
                            })
                        }
                    });
                } else {
                    res.status(409).json({
                        message: 'Email already in use.'
                    }) // 409 Generic Conflict
                }
            })
    });

module.exports = users;
