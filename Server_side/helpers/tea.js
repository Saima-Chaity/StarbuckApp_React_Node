var Tea = require('../models/tea');


exports.getTeas = function(req, res){
    Tea.find()
    .then(function(books){
        res.json(books);
    })
    .catch(function(err){
        res.send(err);
    })
}



exports.createTea = function(req, res){
  Tea.create(req.body)
  .then(function(newBook){
      res.status(201).json(newBook);
  })
  .catch(function(err){
      res.send(err);
  })
}

// exports.newBook = function(req, res){
//   res.redirect("/books/new")
// }


exports.getTea = function(req, res){
   Tea.findById({_id:req.params.id})
   .then(function(foundBook){
       res.json(foundBook);
   })
   .catch(function(err){
       res.send(err);
   })
}


exports.updateTea =  function(req, res){
  Tea.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
   .then(function(book){
       res.json(book);
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