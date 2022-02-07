const db = require('../models');
const Todo = db.todo;
const Op = db.Sequelize.Op;

const asyncWrapper = require('../middleware/async.js');
const { createCustomError } = require('../errors/custom-error.js');

const getAllTodo = asyncWrapper(async (req, res) => {
	const todos = await Todo.findAll()
	res.status(200).json({ todos })
})

const getOneTodo = asyncWrapper(async (req, res) => {
	const id = req.params
	const todo = await Todo.findByPk(id)
	if (!todo) {
		return next(createCustomError(`No todo with id: ${id}`, 404))
	}
})

const createTodo = asyncWrapper(async (req, res) => {
	const data = {
		title: req.body.title,
		description: req.body.description,
		check: req.body.check ? req.body.check : false
	}
	const todo = await Todo.create(data);
	res.status(200).json({ todo })
})

const deleteTodo = asyncWrapper(async (req, res) => {
	const id = req.params
	const todo = await Todo.destroy({ where: {id: { [Op.eq]: id}}})
	res.status(200).json({ todo })
	if (!todo) {
		return next(createCustomError(`No todo with id: ${id}`, 404))
	}
})

const updateTodo = asyncWrapper(async (req, res) => {
	const data = {
		title: req.body.title,
		description: req.body.description,
		check: req.body.check ? req.body.check : false
	}
	const id = req.params.id
	const todo = await Todo.update( data, 
		{ where: {id: { [Op.eq]: id}}}) 
	res.status(200).json({ todo })
	if (!todo) {
		return next(createCustomError(`No todo with id: ${id}`, 404))
	}
})

module.exports = {
	getAllTodo,
	getOneTodo,
	createTodo,
	updateTodo,
	deleteTodo
}