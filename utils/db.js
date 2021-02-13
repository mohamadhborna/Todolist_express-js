const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/todolist_db" ,{
    useNewUrlParser:true ,
    useUnifiedTopology : true
})
    .then(() => {
        console.log("Connected to Database successfully");
    })
    .catch((err) => {
        console.log(err);
    });
