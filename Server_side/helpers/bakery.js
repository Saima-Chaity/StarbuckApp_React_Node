var Bakery = require('../models/bakery');


exports.getBakerys = function(req, res){
    Bakery.find()
    .then(function(bakery){
        res.json(bakery);
    })
    .catch(function(err){
        res.send(err);
    })
}



exports.createBakery = function(req, res){
  Bakery.create(req.body)
  .then(function(newBakery){
      res.status(201).json(newBakery);
  })
  .catch(function(err){
      res.send(err);
  })
}

exports.getBakery = function(req, res){
   Bakery.findById({_id:req.params.id})
   .then(function(foundBakery){
       res.json(foundBakery);
   })
   .catch(function(err){
       res.send(err);
   })
}


exports.updateBakery =  function(req, res){
  Bakery.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
   .then(function(bakery){
       res.json(bakery);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.deleteBakery = function(req, res){
 Bakery.findOneAndRemove({_id: req.params.id}) 
   .then(function(){
       res.json({message: 'We deleted it!'});
   })
   .catch(function(err){
       res.send(err);
   })
}

module.exports = exports;