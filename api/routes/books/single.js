const Book = require('./../../lib/models/book');

module.exports = async (req, res) => {
    const result = await Book.find({ _id: req.params.bookId }).exec();
    res.status(200).json(result);
};