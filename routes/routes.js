const router = require('express').Router();
const bcrypt = require('bcrypt');

//router = express.Router();

var Todo = require('../models/todo');

Todo = require("../controllers/todocontroller.js");

var User = require('../models/user');

User = require("../controllers/usercontroller.js");

//Get All todos
router.get('/', Todo.list);

//Get all users
router.get('/users',User.list);

//add todos
router.post('/todos', Todo.save);

//add user
router.post('/users', User.create);

//sign in user
router.post('/signin',User.save);

//update todos
router.put('/update/:id', Todo.put);

//delete todo from id
router.delete('/delete/:id', Todo.delete);


router.post('/todos/:id/complited', Todo.edit);


module.exports = router;