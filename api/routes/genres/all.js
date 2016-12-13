const genres = require('./../../lib/models/genres-data');

module.exports = (req, res) => {
    res.status(200).json(genres);
};