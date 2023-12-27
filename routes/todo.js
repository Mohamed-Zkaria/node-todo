const express = require('express');
const UserModel = require("../models/UserModel");
const TodoModel = require('../models/TodoModel');
const TodController = require('../controllers/TodoController');
const todoRouter = express.Router();

todoRouter.post("/user/:id", async (req,res) =>{
    TodController.addTodo(req,res);
});

todoRouter.get("/:todoId", async(req,res) =>{
    TodController.getTodo(req,res);
});

todoRouter.put("/:todoId", async(req,res) =>{
    TodController.updateTodo(req, res);
});

todoRouter.delete("/:todoId", async(req,res) =>{
    TodController.deleteTodo(req, res);
});


// func 5
todoRouter.get("/user/all/:id", async(req,res) =>{
    TodController.getUserAllTodos(req,res);
});

module.exports = todoRouter;
