const express = require('express');
const UserModel = require("../models/UserModel");
const TodoModel = require('../models/TodoModel');
const TodController = require('../controllers/TodoController');
const todoRouter = express.Router();

todoRouter.post("/user/:id", async (req,res) =>{
    TodController.addTodo(req,res);
});

todoRouter.get("/:todoId", async(req,res) =>{
    TodController.getUserTodo(req,res);
});

todoRouter.put("/user/:id", async(req,res) =>{

});

todoRouter.delete("/user/:id", async(req,res) =>{

});


// func 5
todoRouter.get("/user/all/:id", async(req,res) =>{

});

module.exports = todoRouter;
