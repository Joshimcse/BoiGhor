const Book = require('../models/Book');
const Category = require('../models/Category');

const { format } = require('../utils/format-respone');

/**
 * @route  GET api/books?category=islamic&limit=12
 * @param  limit {Number} - [optional - defaul is 12]
 * @param  category {String} - [optional]
 * @desc   Return a books of array. if categories are define
 *         then produces categories wise books and Default array size is 12
 * @access Public
 */

const booksController = (req, res) => {
  let category = req.query.category || undefined;
  let limit = parseInt(req.query.limit) || 12;

  if (category) {
    Category.findOne({ 'title.en': category })
      .then((category) => {
        Book.find({ categories: category.id })
          .limit(limit)
          .populate(['authors', 'publisher', 'categories'])
          .then((books) => {
            formatedBooks = books.map(format.book);
            res.status(200).json(formatedBooks);
          })
          .catch((err) => res.status(404).json({ msg: err.message }));
      })
      .catch((err) => res.status(404).json({ msg: err.message }));
  } else {
    Book.find({})
      .limit(limit)
      .populate(['authors', 'publisher', 'categories'])
      .then((books) => {
        formatedBooks = books.map(format.book);
        res.status(200).json(formatedBooks);
      })
      .catch((err) => res.status(404).json({ msg: err.message }));
  }
};

const bestSellersController = (req, res) => {
  Book.find({})
    .sort({ sold: -1 })
    .limit(12)
    .then((books) => res.json(books));
};

const singleBookController = (req, res) => {
  let id = req.params.id;
  Book.findById(id).then((book) => res.json(book));
};

const specialsController = (req, res) => {
  Book.find({})
  .sort({ sold: -1 })
  .limit(12)
  .then((books) => res.json(books));
};

module.exports = {
  singleBookController,
  booksController,
  bestSellersController,
  specialsController
};
