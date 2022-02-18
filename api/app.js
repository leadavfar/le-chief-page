require('dotenv').config();
require('./database');

const express = require("express");
const morgan = require("morgan");

const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use('/api', routes);

module.exports = app;

