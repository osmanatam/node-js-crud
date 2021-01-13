var express = require('express');
var route = express.Router();

var adminController = require('../controllers/adminController');

route.get('/',adminController.admin_index);
route.get('/add-post',adminController.admin_create);
route.post('/add-post',adminController.admin_store);
route.delete('/destroy/:id',adminController.admin_destroy);

module.exports = route;