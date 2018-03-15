var IcedDrink = require('../models/icedDrink');


exports.getIcedDrinks = function(req, res){
    IcedDrink.find()
    .then(function(books){
        res.json(books);
    })
    .catch(function(err){
        res.send(err);
    })
}



exports.createIcedDrink = function(req, res){
  IcedDrink.create(req.body)
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


exports.getIcedDrink = function(req, res){
   IcedDrink.findById({_id:req.params.id})
   .then(function(foundBook){
       res.json(foundBook);
   })
   .catch(function(err){
       res.send(err);
   })
}


exports.updateIcedDrink =  function(req, res){
  IcedDrink.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
   .then(function(book){
       res.json(book);
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