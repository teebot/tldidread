const Book = require('./../../lib/models/book');
module.exports = async (req, res) => {
  if (!req.query.q) {
      return res.status(500).json({message: 'No query q parameter'});
  } else {
      const result = await Book.findByTitle(req.query.q);
      return res.status(200).json(result);
  }
};