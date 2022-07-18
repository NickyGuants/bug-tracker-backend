const mongoose = require('mongoose');
require('dotenv').config();

const app = require('./app');

const port = 5000 || process.env.PORT;

const DB = process.env.MONGO_URI;

mongoose
	.connect(DB, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => console.log('Db connection was successful'));

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
