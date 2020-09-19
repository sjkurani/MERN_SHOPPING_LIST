const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const app = express();

// Bodyparser Middleware.

app.use(bodyParser.json());

// db config
const db = require('./configs/keys').mongoURI;

// connect to mongoose
mongoose
    .connect(db)
    .then(() => console.log("MongoDb connected"))
    .catch(error => console.log(error));

//Use routes here.
app.use('/api/items', items);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on ${port}`));



