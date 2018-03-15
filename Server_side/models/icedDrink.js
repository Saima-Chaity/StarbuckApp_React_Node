var mongoose = require('mongoose');

var icedDrinkSchema = new mongoose.Schema({
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

var IcedDrink = mongoose.model('IcedDrink', icedDrinkSchema);

module.exports = IcedDrink ;
