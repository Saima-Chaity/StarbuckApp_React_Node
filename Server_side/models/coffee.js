var mongoose = require('mongoose');

var coffeeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
        
    },
    image: {
        type: String,
        required: true

   
    },

    ingredients: {
        type: String,
        required: true

   
    }

});

var Coffee = mongoose.model('Coffee', coffeeSchema);

module.exports = Coffee ;
