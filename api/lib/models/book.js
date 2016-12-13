const mongoose = require('mongoose');
const genres = require('./genres-data');
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    cover: String,
    genre: {
        type: String,
        enum: genres,
        required: true
    }
});

bookSchema.statics.findByTitle = function(title) {
    return this.find({ title: new RegExp(title, 'i') }).exec();
};

module.exports = mongoose.model('Book', bookSchema);