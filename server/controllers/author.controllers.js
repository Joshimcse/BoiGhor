const Author = require('../models/Author');
const Book = require('../models/Book');

const singleAuthorController = (req, res) => {
  let { id } = req.params;
  Author.findById(id).then((author) => {
    res.json(author)
    // Book.find({ authors: author.id }).then((books) => {
    //   author.books = books;
    //   res.json(author);
    // });
  });
};

const authorsController = (req, res) => {
  let limit = parseInt(req.query.limit) || 6;
  Author.find({})
    .limit(limit)
    .populate('books')
    .then((authors) => res.json(authors));
};

module.exports = {
  singleAuthorController,
  authorsController
};
