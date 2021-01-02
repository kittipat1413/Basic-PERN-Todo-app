const express = require('express');
const controller = require('../../controllers/todos.controller');

const router = express.Router();
router.route('/').post(controller.addTodo).get(controller.getallTodo);
router.route('/test').get(controller.test);
router.route('/:id').get(controller.getTodoById).put(controller.updateTodo).delete(controller.deleteTodo);

module.exports = router;