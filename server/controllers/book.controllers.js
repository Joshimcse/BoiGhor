const Book = require('../models/Book');

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
  let limit = parseInt(req.query.limit) || 3;

  Book.find({})
    .limit(limit)
    .populate(['authors', 'publisher', 'categories'])
    .then((books) => {
      formatedBooks = books.map(format.book);
      res.status(200).json(formatedBooks);
    })
    .catch((err) => res.status(404).json({ msg: err.message }));
};

module.exports = {
  booksController
};
