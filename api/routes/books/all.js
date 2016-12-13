const Book = require('./../../lib/models/book');

module.exports = async (req, res) => {
    const books = await Book.find();
    res.status(200).json(books);
};