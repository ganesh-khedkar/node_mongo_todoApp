var mongoose = require("mongoose");
//var Todo = mongoose.model("Todo");

const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


var userconrtoller = {};

//Get Users
userconrtoller.list = function (req, res) {

    User.find({}, function (err, results) {
        if (err) {
            res.json({ msg: 'find fail to user' });
        } else {
            res.json({ msg: ' user is here ' });
        }
    });
};

//Create new user
/*if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {
*/
userconrtoller.create = function (req, res) {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        if (err) {
            return res.status(500).json({
                error: err
            });
        }
        else {
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                username: req.body.username,
                email: req.body.email,
                password: hash,
                passwordConf: hash
            });
            user.save().then(function (result) {
                console.log(result);
                res.status(200).json({
                    success: 'New user has been created'
                });
            }).catch(error => {
                res.status(500).json({
                    error: err
                });
            });
        }
    });
};
//};
// Sign in user
userconrtoller.save = function (req, res) {
    User.findOne({ email: req.body.email })
        .exec()
        .then(function (user) {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (err) {
                    return res.status(401).json({
                        failed: 'Unauthorized Access'
                    });
                }
                if (result) {
                    /* return res.status(200).json({
                        success: 'Welcome to the JWT Auth'
                     });*/
                    const JWTToken = jwt.sign({
                        email: user.email,
                        _id: user._id
                    },
                        'secret',
                        {
                            expiresIn: '2h'
                        });
                    return res.status(200).json({
                        success: 'Welcome to the JWT Auth',
                        token: JWTToken
                    });
                }
                return res.status(401).json({
                    failed: 'Unauthorized Access'
                });
            });
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });;
};
module.exports = userconrtoller;