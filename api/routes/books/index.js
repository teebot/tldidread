const books = require('express').Router();
const all = require('./all');
const single = require('./single');
const search = require('./search');
const create = require('./create');

books.get('/', all);
books.get('/search', search);
books.get('/:bookId', single);
books.post('/', create);

module.exports = books;