const Todo = require("../models/todoModel");
const { completeTodo } = require("./adminControllers");

exports.getIndex = async (req , res) =>{
    try{
        const completedTodos = await Todo.countDocuments({completed :  true});
        const todos = await Todo.find();
        res.render("index" , {
            pageTitle : "todays task",
            todos : todos,
            completedTodos : completedTodos,
            remainingTodos:todos.length - completedTodos
        })

        
    }
    catch(err){
        console.log(err);
    }

}