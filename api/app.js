const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mongoose = require('mongoose');
const DATABASE = process.env.DATABASE || 'mongodb://192.168.99.100:27017/tldidread';

mongoose.connect(DATABASE);

const routes = require('./routes');
const books = require('./routes/books');
const genres = require('./routes/genres');

app.use('/', routes);
app.use('/books', books);
app.use('/genres', genres);

app.listen(4000);
