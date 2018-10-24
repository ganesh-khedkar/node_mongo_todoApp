const express = require('express');
const router = require('express').Router();

const jwt = require('jsonwebtoken');

const routes = require('../routes/routes');

const app = express();


const User = require('../models/user');

var authenticate = ((req, res, next) => {
    console.log("in auth");

    var token = req.headers['access-token'];

    // decode 
    if (token) {

        // verifies secret and checks if the token is expired
        jwt.verify(token, 'secret', (err, decoded) => {
            if (err) {
                return res.json({ message: 'invalid token' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token  

        res.send({

            message: 'No token provided.'
        });

    }
});
module.exports = {
    authenticate
};
