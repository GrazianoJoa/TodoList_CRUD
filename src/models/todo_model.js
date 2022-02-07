module.exports = (sequelize, Sequelize) => {
	const Todo = sequelize.define('todos', {
		title: {
			type: Sequelize.STRING,
			allowNull: false
		},
		description: {
			type: Sequelize.STRING
		},
		mark: {
			type: Sequelize.BOOLEAN
		}
	}, 
	{
		timestamps: false,
		createAt: false,
		updateAt: false,
	});
	return Todo
}