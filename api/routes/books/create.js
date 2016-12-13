const Book = require('./../../lib/models/book');

module.exports = async(req, res) => {
    try {
        let {title, author, genre} = req.body;
        const book = new Book({title, author, genre});
        await book.save();
        res.status(201).json({});
    } catch (e) {
        let {message, name} = e;
        res.status(500).json({message, name});
    }
};