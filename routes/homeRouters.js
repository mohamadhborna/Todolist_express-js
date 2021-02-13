const {Router} = require("express");
const todoController = require("../controllers/todoController");

const router = new Router();

router.get("/" , todoController.getIndex);

module.exports = router;