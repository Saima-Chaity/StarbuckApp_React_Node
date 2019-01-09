var Tea = require('../models/tea');


exports.getTeas = function(req, res){
    Tea.find()
    .then(function(teas){
        res.json(teas);
    })
    .catch(function(err){
        res.send(err);
    })
}



exports.createTea = function(req, res){
  Tea.create(req.body)
  .then(function(newTea){
      res.status(201).json(newTea);
  })
  .catch(function(err){
      res.send(err);
  })
}

exports.getTea = function(req, res){
   Tea.findById({_id:req.params.id})
   .then(function(foundTea){
       res.json(foundTea);
   })
   .catch(function(err){
       res.send(err);
   })
}


exports.updateTea =  function(req, res){
  Tea.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
   .then(function(tea){
       res.json(tea);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.deleteTea = function(req, res){
 Tea.findOneAndRemove({_id: req.params.id}) 
   .then(function(){
       res.json({message: 'We deleted it!'});
   })
   .catch(function(err){
       res.send(err);
   })
}

module.exports = exports;