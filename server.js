const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const path = require('path');

const dares = require('./routes/api/dares.js');
const penalties = require('./routes/api/penalties.js');
const resume = require('./routes/api/resume.js');

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
app.use('/api/penalties', penalties);

//resume
app.use('/resume', )

// serve static assests
if(process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = 5000;

app.listen(port, () => console.log('Server started on port' + port));
