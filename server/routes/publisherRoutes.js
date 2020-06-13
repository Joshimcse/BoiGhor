const router = require('express').Router();

/**
 * @route  GET api/publishers/:id
 * @desc
 * @access Public
 */
router.get('/:id', (req, res) => {});

/**
 * @route  GET api/publishers?limit=12
 * @param  limit {Number} - [optional - defaul is Infinite]
 * @desc
 * @access Public
 */
router.get('/', (req, res) => {});

module.exports = router;
