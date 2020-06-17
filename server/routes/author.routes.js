const router = require('express').Router();

/**
 * @route  GET api/authors/best-seller?imit=12
 * @param  limit {Number} - [optional - defaul is 12]
 * @desc
 * @access Public
 */
router.get('/best-seller', (req, res) => {});

/**
 * @route  GET api/authors/:id
 * @desc
 * @access Public
 */
router.get('/:id', (req, res) => {});

/**
 * @route  GET api/authors?limit=12
 * @param  limit {Number} - [optional - defaul is 12]
 * @desc
 * @access Public
 */
router.get('/', (req, res) => {});

module.exports = router;
