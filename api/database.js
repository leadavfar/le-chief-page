const mongoose = require('mongoose');

const { LE_CHIEF_PAGE_MONGODB_LOCALHOST, LE_CHIEF_PAGE_MONGODB_DATABASE } = process.env;

const MONGODB_URI = `mongodb://${LE_CHIEF_PAGE_MONGODB_LOCALHOST}/${LE_CHIEF_PAGE_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('Database connected'))
    .catch(error => console.log(error));