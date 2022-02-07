module.exports = {
	HOST: "localhost",
	USER: "new",
	PASSWORD: "123",
	DB: "todo_db",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
};
