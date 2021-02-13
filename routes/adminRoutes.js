const {Router} = require("express");
const adminControllers = require("../controllers/adminControllers");

const router = new Router();

// @desc Add Todo
// @route Post /admin/add-todo
router.post("/add-todo" , adminControllers.addTodo);

// @desc change uncompleted todo state to completed todo
// @route Get /admin/completed-todo
router.get("/completed-todo" , adminControllers.completeTodo);

// @desc Delete selected todo
// @route Get /admin/delete-todo
router.get("/delete-todo" , adminControllers.deleteTodo);

module.exports = router