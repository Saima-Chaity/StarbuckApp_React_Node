var IcedDrink = require('../models/icedDrink');


exports.getIcedDrinks = function(req, res){
    IcedDrink.find()
    .then(function(drinks){
        res.json(drinks);
    })
    .catch(function(err){
        res.send(err);
    })
}



exports.createIcedDrink = function(req, res){
  IcedDrink.create(req.body)
  .then(function(newDrink){
      res.status(201).json(newDrink);
  })
  .catch(function(err){
      res.send(err);
  })
}

exports.getIcedDrink = function(req, res){
   IcedDrink.findById({_id:req.params.id})
   .then(function(foundDrink){
       res.json(foundDrink);
   })
   .catch(function(err){
       res.send(err);
   })
}


exports.updateIcedDrink =  function(req, res){
  IcedDrink.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
   .then(function(drink){
       res.json(drink);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.deleteIcedDrink = function(req, res){
 IcedDrink.findOneAndRemove({_id: req.params.id}) 
   .then(function(){
       res.json({message: 'We deleted it!'});
   })
   .catch(function(err){
       res.send(err);
   })
}

module.exports = exports;