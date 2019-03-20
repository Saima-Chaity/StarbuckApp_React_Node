var express = require('express');
var router = express.Router();
var helpers = require("../helpers/icedDrink");

router.route('/')
 .get(helpers.getIcedDrinks)
 .post(helpers.createIcedDrink)
 
router.route('/:id')
  .get(helpers.getIcedDrink)
  .put(helpers.updateIcedDrink)
  .delete(helpers.deleteIcedDrink)
  


module.exports = router;