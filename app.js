const express = require('express')
const app = express()
const mongoose = require('mongoose');
// const { config } = require('process');
const dotenv = require('dotenv')
app.listen(2000, () => {
    console.log('listening on port 2000 ');
})

dotenv.config({
    path: './config.env'
})
mongoose
    .connect('mongodb+srv://abdulkhan01:root@trips.yl7b5c0.mongodb.net/?retryWrites=true&w=majority', {
        // useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        // useUnifiedTopology: true
    }).then(con => {

        console.log('connected with moongoses');
    })
