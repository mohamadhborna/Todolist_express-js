const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    text:{
        type: String ,
        required : true , 
        trim: true ,
        minlength : 5 ,
        maxlength : 255
    } ,
    isCompleted : {
        type : Boolean ,
        required:false,
        default : false
    }
})

const Todo = mongoose.model("Todo" , todoSchema);

module.exports = Todo