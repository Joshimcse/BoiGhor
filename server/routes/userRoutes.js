const router = require('express').Router();

/**
 * @route  POST api/users/register
 * @desc   Register an user
 * @access Public
 */
router.post('/register', (req, res) => {});

/**
 * @route  POST api/users/login
 * @desc   Send user info to server && check it valid or not.
 * @access Public
 */
router.post('/login', (req, res) => {});

/**
 * @route  GET api/users/logout
 * @desc
 * @access private
 */
router.get('/logout', (req, res) => {});

module.exports = router;
