const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express();
const postRoutes = require('./routes/post')

dotenv.config()
mongoose.connect(process.env.MONGO_URI).then(() => { console.log('db connection successfull') });

mongoose.connection.on("error", err => { console.log(`db connection error: ${err.message}`) });


const port = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', postRoutes);

app.listen(port)