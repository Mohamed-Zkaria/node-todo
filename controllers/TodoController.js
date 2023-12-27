const TodoModel = require("../models/TodoModel");
const UserModel = require("../models/UserModel");
const mongoose = require('mongoose');
const TodoController = {};

TodoController.addTodo = async(req, res) => {

    userNotFoundMsg = 'User not found';
    
    let {id} = req.params
    let { title, body, status } = req.body;
    
    id = new mongoose.Types.ObjectId(id);
    let user = await UserModel.findById( id );
    if(!user){
        return res.status(404).send({ msg: userNotFoundMsg })
    }
    
    try {
        let todo = new TodoModel({title, body, status, user});
        await todo.save();
        user.todos.push(todo);
        await user.save();
        
        return res.status(200).send({todo})
    } catch (error) {
        console.log(error)
        return res.status(400).send( { msg: error.message } )
    }
    

}

TodoController.updateTodo = async(req, res) => {
    
}

TodoController.deleteTodo = async(req, res) => {
    
}

TodoController.getUserTodo = async(req, res) => {
    
    let {todoId} = req.params    
    todoId = new mongoose.Types.ObjectId(todoId);
    try {
        let todo = await TodoModel.findById(todoId)
        return res.status(200).send({todo})
    } catch (error) {
        console.log(error)
        return res.status(400).send( { msg: error.message } )
    }
}

TodoController.getUserAllTodos = async(req, res) => {
    
}

module.exports = TodoController;