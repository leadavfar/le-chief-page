const mongoose = require('mongoose');

const { LE_CHIEF_PAGE_MONGODB_LOCALHOST, LE_CHIEF_PAGE_MONGODB_DATABASE, LE_CHIEF_PAGE_MONGODB_HOST } = process.env;

/* const MONGODB_URI = `mongodb://${LE_CHIEF_PAGE_MONGODB_LOCALHOST}/${LE_CHIEF_PAGE_MONGODB_DATABASE}`; */

const MONGODB_URI = LE_CHIEF_PAGE_MONGODB_HOST;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .catch(error => console.log(error));