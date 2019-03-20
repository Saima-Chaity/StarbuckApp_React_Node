var express = require('express');
var router = express.Router();
var helpers = require("../helpers/bakery");

router.route('/')
 .get(helpers.getBakerys)
 .post(helpers.createBakery)
 
router.route('/:id')
  .get(helpers.getBakery)
  .put(helpers.updateBakery)
  .delete(helpers.deleteBakery)
  


module.exports = router;