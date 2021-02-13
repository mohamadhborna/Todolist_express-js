const Todo = require("../models/todoModel");

exports.getIndex = async (req , res) =>{
    try{
        const CompletedTodo = await Todo.countDocuments({completed :  true});
        res.send("<h1> haj mamad</h1>");
        
    }
    catch(err){
        console.log(err);
    }

}