require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const {PORT, MONGO_URL} = require('./constants/configs');
const authRouter = require('./routes/auth.router');
const userRouter = require('./routes/user.router');


mongoose.connect(MONGO_URL).then(() => {
    console.log('MongoDB connected!!!');
}).catch(err => {
    console.log('Something went wrong');
    console.log(err);
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());
app.use('/auth', authRouter);
app.use('/users', userRouter);

app.use((err, req, res, next) => {
    console.log(err)
    res
        .status(err.status || 400)
        .json({
            error: err.message || 'Unknown error',
            code: err.status || 400
        })
});

app.use('*', (req, res) => {
    res.status(404).json('Route not found')
});

app.listen(PORT, () => {
    console.log(`Backend is listening ${PORT} port...`)
});