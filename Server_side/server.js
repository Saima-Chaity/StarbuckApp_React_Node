var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    cors = require('cors');
    path = require('path');
    
var coffeeRoutes = require("./routes/coffee");
var teaRoutes = require("./routes/tea");
var icedDrinkRoutes = require("./routes/icedDrink");
var bakeryRoutes = require("./routes/bakery");
var mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://recipereact:recipereact25@ds025263.mlab.com:25263/recipereact').then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/api/coffee', coffeeRoutes);
app.use('/api/tea', teaRoutes);
app.use('/api/icedDrink', icedDrinkRoutes);
app.use('/api/bakery', bakeryRoutes);


const PORT = 8081;

app.listen(PORT, function(req, res){
    console.log(`APP IS RUNNING ON PORT ${PORT}`);
});
