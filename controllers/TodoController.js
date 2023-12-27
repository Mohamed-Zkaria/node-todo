const TodoModel = require("../models/TodoModel");
const UserModel = require("../models/UserModel");
const mongoose = require('mongoose');
const TodoController = {};

TodoController.addTodo = async (req, res) => {

    userNotFoundMsg = 'User not found';

    let { id } = req.params
    let { title, body, status } = req.body;

    id = new mongoose.Types.ObjectId(id);
    let user = await UserModel.findById(id);
    if (!user) {
        return res.status(404).send({ msg: userNotFoundMsg })
    }

    try {
        let todo = new TodoModel({ title, body, status, user });
        await todo.save();
        user.todos.push(todo);
        await user.save();

        return res.status(200).send({ todo })
    } catch (error) {
        console.log(error)
        return res.status(400).send({ msg: error.message })
    }


}

TodoController.getTodo = async (req, res) => {
    let { todoId } = req.params
    todoId = new mongoose.Types.ObjectId(todoId);
    try {
        let todo = await TodoModel.findById(todoId);
        return res.status(200).send({ todo });
    } catch (error) {
        console.log(error)
        return res.status(400).send({ msg: error.message })
    }
}

TodoController.updateTodo = async (req, res) => {
    console.log("update")

    let { title, body, status } = req.body;
    console.log({ body: req.body })
    
    let { todoId } = req.params
    console.log({ todoId })
    todoId = new mongoose.Types.ObjectId(todoId);

    try {
        let todo = await TodoModel.findById(todoId);
        if(title){
            todo.title = title;
        }
        if(body){
            todo.body = body;
        }
        if(status){
            todo.status = status;
        }

        await todo.save();
        console.log({ todo })
        return res.status(200).send({ todo });
    } catch (error) {
        console.log(error)
        return res.status(400).send({ msg: error.message })
    }

}

TodoController.deleteTodo = async (req, res) => {

    let { todoId } = req.params
    todoId = new mongoose.Types.ObjectId(todoId);
    try {
        let todo = await TodoModel.findById(todoId);
        if (todo) {
            await todo.deleteOne();
            return res.status(200).send({ todo });
        } else {
            return res.status(404).send({ msg: "todo not found" })
        }
    } catch (error) {
        console.log(error)
        return res.status(400).send({ msg: error.message })
    }

}

TodoController.getUserAllTodos = async (req, res) => {

    userNotFoundMsg = 'User not found';

    let { id } = req.params

    id = new mongoose.Types.ObjectId(id);
    let user = await UserModel.findById(id);
    if (!user) {
        return res.status(404).send({ msg: userNotFoundMsg })
    }

    todos = await user.populate('todos');
    return res.status(200).send({todos});
}

module.exports = TodoController;