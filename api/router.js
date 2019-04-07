// wiki.js - Wiki route module.

var express = require('express');
var router = express.Router();
const searchHandler = require('./search-result');

router.get('/items',searchHandler.searchResults);
router.get('/items/:id',searchHandler.searchResults);
// // About page route.
// router.get('/about', function (req, res) {
//   res.send('About this wiki');
// })

module.exports = router;