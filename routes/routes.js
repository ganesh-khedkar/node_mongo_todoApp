const router = require('express').Router();

//router = express.Router();

var Todo = require('../models/todo');

Todo = require("../controllers/todocontroller.js");

//Get All todos
router.get('/', Todo.list);

//add todos
router.post('/todos', Todo.save);

//update todos
router.put('/update/:id', Todo.put);

//delete todo from id
router.delete('/delete/:id', Todo.delete);


//router.post('/todos/:id',Todo.edit);


module.exports = router;