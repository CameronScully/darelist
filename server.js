const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const dares = require('./routes/api/dares.js');

const app = express();

//bodyParser middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys.js').mongoURI;

//connect to mongo
mongoose
    .connect(db)
    .then(() => console.log("MongoDB Connected"))
    .catch(e => {
        console.error(e.message)
    });

//User routes
app.use('/api/dares', dares);

const port = 5000;

app.listen(port, () => console.log('Server started on port ${port}'));
