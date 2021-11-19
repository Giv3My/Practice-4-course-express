const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3000,
    routes = require('./routes'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/db_users');

routes(app);
app.listen(PORT);