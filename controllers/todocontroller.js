var mongoose = require("mongoose");
//var Todo = mongoose.model("Todo");

const Todo = require('../models/todo');


var todoconrtoller = {};

//List of all todos
todoconrtoller.list = function (req, res) {

    Todo.find({}).then(function (results) {

        let todos = results.filter(function(todo){
            return !todo.done;
        });

        let doneTodos = results.filter(function(todo){
            return todo.done;
        });
        res.render('index', { todos: todos,doneTodos:doneTodos });
       //res.json(todos); 
       // localStorage.setItem('todoList', results );
    });
};

/*todoconrtoller.create =function(req,res){
    let newTodo = new Todo({ description: req.body.description });*/


    //Save the new todos in database
todoconrtoller.save = function (req, res) {
    let newTodo = new Todo({ description: req.body.description });
    newTodo.save().then(function (result) {
        res.redirect('/');
        //res.json(todos);
       // console.log('Todo upadated in list');
    })
        .catch(function (err) {
            console.log(err);
            res.redirect('/');

        });
};

//Delete to item from todoList
todoconrtoller.delete = function(req, res) {
    Todo.remove({_id: req.params.id}, function(err) {
      if(err) {
        console.log(err);
      }
      else {
        console.log("Todo item deleted!");
        res.redirect("/");
      }
    });
  };
  //Update Item from Todo List
  todoconrtoller.put = function(req,res){
    var query={
        description: req.body.description
    }
    Todo.update({_id: req.params.id},query,function(err,result){
        if(err){

            res.json({msg:'faild to update data'});
         }else{
             res.json({msg:' data updated sucessfully'});
         }

    });
  };
/*todoconrtoller.edit = function (req, res) {
    let todoId = req.params.id;
    Todo.findById(todoId)
        .exec()
        .then(function (result) {
            result.done = !result.done;
            return result.save();

        }).then(function (result) {
            res.redirect('/');
        });

};
*/


module.exports = todoconrtoller;
