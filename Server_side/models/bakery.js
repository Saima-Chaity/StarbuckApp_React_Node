var mongoose = require('mongoose');

var bakerySchema = new mongoose.Schema({
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

var Bakery = mongoose.model('Bakery', bakerySchema);

module.exports = Bakery ;
