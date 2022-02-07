const express = require('express');
const router = express.Router();

const { 
	getAllTodo,
	getOneTodo,
	createTodo,
	updateTodo,
	deleteTodo
} = require('../controllers/todo_controller.js')

router.route('/').get(getAllTodo).post(createTodo);
router.route('/:id').get(getOneTodo).patch(updateTodo).delete(deleteTodo)

module.exports = router;