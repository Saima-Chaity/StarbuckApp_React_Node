var mongoose = require('mongoose');

var teaSchema = new mongoose.Schema({
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

var Tea = mongoose.model('Tea', teaSchema);

module.exports = Tea ;
