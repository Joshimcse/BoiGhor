const router = require('express').Router();

const {
  singleAuthorController,
  authorsController
} = require('../controllers/author.controllers');

/**
 * @route  GET api/authors/best-seller?imit=12
 * @param  limit {Number} - [optional - default is 12]
 * @desc
 * @access Public
 */
router.get('/best-seller', (req, res) => {});

/**
 * @route  GET api/authors/:id
 * @desc
 * @access Public
 */
router.get('/:id', singleAuthorController);

/**
 * @route  GET api/authors?limit=12
 * @param  limit {Number} - [optional - default is 12]
 * @desc
 * @access Public
 */
router.get('/', authorsController);

module.exports = router;
