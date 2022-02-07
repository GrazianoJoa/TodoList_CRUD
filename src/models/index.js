const Sequelize = require('sequelize');
const db_Config = require('../config/db.config.js');

const sequelize = new Sequelize(
	db_Config.DB,
	db_Config.USER,
	db_Config.PASSWORD,
	{
		host: db_Config.HOST,
		dialect: db_Config.dialect,
		pool: {
			max: db_Config.pool.max,
			min: db_Config.pool.min,
			acquire: db_Config.pool.acquire,
			idle: db_Config.pool.idle
		}
	}
);

/* TEST CONNECTION
const TEST_CONNECTION = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established')
	} catch(err) {
		console.log(error);
	}
}
TEST_CONNECTION();
*/

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.todo = require('./todo_model.js')(sequelize, Sequelize);

module.exports = db;