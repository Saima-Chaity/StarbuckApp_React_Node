var Coffee = require('../models/coffee');


exports.getCoffees = function(req, res){
    Coffee.find()
    .then(function(Coffees){
        res.json(Coffees);
    })
    .catch(function(err){
        res.send(err);
    })
}



exports.createCoffee = function(req, res){
  Coffee.create(req.body)
  .then(function(newCoffee){
      res.status(201).json(newCoffee);
  })
  .catch(function(err){
      res.send(err);
  })
}

exports.getCoffee = function(req, res){
   Coffee.findById({_id:req.params.id})
   .then(function(foundCoffee){
       res.json(foundCoffee);
   })
   .catch(function(err){
       res.send(err);
   })
}


exports.updateCoffee =  function(req, res){
  Coffee.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
   .then(function(Coffee){
       res.json(Coffee);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.deleteCoffee = function(req, res){
 Coffee.findOneAndRemove({_id: req.params.id}) 
   .then(function(){
       res.json({message: 'We deleted it!'});
   })
   .catch(function(err){
       res.send(err);
   })
}

module.exports = exports;