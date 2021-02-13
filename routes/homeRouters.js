const {Router} = require("express");
const todoController = require("../controllers/todoController");

const router = new Router();

//@desc index page 
//@route Get /
router.get("/" , todoController.getIndex);

module.exports = router;