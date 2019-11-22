require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan')
const path = require("path");
const ObjectId = require('mongodb').ObjectId;
const usersRoutes = require('./routes/index')
let uri = ""
const app = express();



// note with heroku deployment you must source port from env
const MONGODB_URI = process.env.ATLAS_URI 
// || 'mongodb://localhost/auth'
const port = process.env.PORT || 4001
;

// register middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))


// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  uri = process.env.ATLAS_URI;   // connection string for Atlas here  
} else {
  uri = process.env.ATLAS_URI;  // connection string for localhost mongo here  
}


// connection to database
mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection is live");
})

app.get('/api/products', async (req, res) => {
    try {
        const post = await products.find()
        res.send(post)
    } catch(err) {
        res.json({ message: err})
    }
})

app.use('/api/users', usersRoutes)

app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });