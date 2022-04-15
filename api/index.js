var express = require('express');
var app = require('./app');
const PORT = process.env.PORT;

app.get('/', function (req, res) {
    res.send("<h1>Le Chief Page API</h1>")
});

app.listen(PORT);