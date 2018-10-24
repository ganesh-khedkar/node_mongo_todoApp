const router = require('express').Router();
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');

var Todo = require('../models/todo');

Todo = require("../controllers/todocontroller.js");

var User = require('../models/user');

User = require("../controllers/usercontroller.js");

//var auth = require('../middleware/auth');
//authenticate = require("../middleware/auth.js");


//Get All todos
router.get('/', auth.authenticate, Todo.list);

//Get all users
router.get('/users', auth.authenticate, User.list);

//add todos
router.post('/todos', auth.authenticate, Todo.save);

//add user
router.post('/users', User.create);

//sign in user
router.post('/signin', User.save);

//update todos
router.put('/update/:id', auth.authenticate, Todo.put);

//delete todo from id
router.delete('/delete/:id', auth.authenticate, Todo.delete);


router.post('/todos/:id/complited', auth.authenticate, Todo.edit);


module.exports = router;