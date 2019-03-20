var express = require('express');
var router = express.Router();
var helpers = require("../helpers/coffee");

router.route('/')
 .get(helpers.getCoffees)
 .post(helpers.createCoffee)
 
router.route('/:id')
  .get(helpers.getCoffee)
  .put(helpers.updateCoffee)
  .delete(helpers.deleteCoffee)
  


module.exports = router;