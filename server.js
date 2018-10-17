const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/node_mongo_todo', { useNewUrlParser: true })


    .then(function () {
        console.log('Database connected');
    });



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;
app.engine('mustache', mustacheExpressInstance);
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use('/', routes)

app.listen(3001, function () {
    console.log('listing on port 3001......');
});