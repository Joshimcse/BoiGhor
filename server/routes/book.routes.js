const {
  booksController,
  singleBookController,
  bestSellersController,
  specialsController
} = require('../controllers/book.controllers');

const router = require('express').Router();

/**
 * @route  GET api/books/specials?limit=6
 * @param  limit {Number} - [optional - defaul is 6]
 * @desc   Returns boighor specials books of array. if limit is not
 *         define, default array size is 6
 * @access Public
 */
router.get('/specials', specialsController);

/**
 * @route  GET api/books/best-seller?category=islamic&limit=12
 * @param  limit {Number} - [optional - defaul is 12]
 * @param  category {String} - [optional]
 * @desc   Return boighor best selling books of array.
 * @access Public
 */
router.get('/best-sellers', bestSellersController);

/**
 * @route  GET api/books/:id?related=true
 * @param  related {boolean} - [optional]
 * @desc   Return single book data by id. if related is true then produce a books data array same as.
 * @access Public
 */
router.get('/:id', singleBookController);

/**
 * @route  GET api/books?category=islamic&limit=12
 * @param  limit {Number} - [optional - defaul is 12]
 * @param  category {String} - [optional]
 * @desc   Return a books of array. if categories are define
 *         then produces categories wise books and Default array size is 12
 * @access Public
 */
router.get('/', booksController);

module.exports = router;
