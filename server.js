const express = require('express');
const mongoose = require('mongoose');
const app = express();

require("./server/config/mongoose.config");

app.use( express.json(), express.urlencoded({ extended: true }) );

const Routes = require('./server/routes/jokes.routes');
Routes(app);

const server = app.listen(8000, () => console.log(`Server is locked and loaded on port ${server.address().port}!`));