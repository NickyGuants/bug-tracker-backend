const express = require( 'express' );
const userRouter = require('./components/users/routes/index')

const app = express();

app.use('/users', userRouter)

module.exports = app;