const express = require('express');
const app = express();
const todos = require('./src/routes/todo.js');
const db = require('./src/models/index.js')
const notFound = require('./src/middleware/notFound.js');
const errorHandlerMiddleware = require('./src/middleware/error-handler.js');

db.sequelize.sync();

// MIDDLEWARE

app.use(express.static('./public'));
app.use(express.json());

// ROUTES

app.use('/api/v1', todos);
app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log('Server running on PORT: ' + PORT)
});