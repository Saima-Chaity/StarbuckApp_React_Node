var Bakery = require('../models/bakery');


exports.getBakerys = function(req, res){
    Bakery.find()
    .then(function(books){
        res.json(books);
    })
    .catch(function(err){
        res.send(err);
    })
}



exports.createBakery = function(req, res){
  Bakery.create(req.body)
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


exports.getBakery = function(req, res){
   Bakery.findById({_id:req.params.id})
   .then(function(foundBook){
       res.json(foundBook);
   })
   .catch(function(err){
       res.send(err);
   })
}


exports.updateBakery =  function(req, res){
  Bakery.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
   .then(function(book){
       res.json(book);
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