var express = require('express');
var route = express.Router();

var blogController = require('../controllers/blogController');

route.get('/',blogController.blog_index);
route.get('/:id',blogController.blog_detail);

module.exports = route;