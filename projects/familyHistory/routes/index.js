var express = require('express');
var router = express.Router();


/* Set up mongoose in order to connect to mongo database */
var mongoose = require('mongoose'); //Adds mongoose as a usable dependency

mongoose.connect('mongodb://localhost/familyHistoryDB'); //Connects to a mongo database called "familyHistoryDB"

var commentSchema = mongoose.Schema({ //Defines the Schema for this database
  name: String,
  id: String,
  birth_place: String,
  baptism: String,
  confirmation: String
});

var familyHistory = mongoose.model('familyHistory', commentSchema); //Makes an object from that schema as a model

var db = mongoose.connection; //Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
  console.log('Connected');
});





router.post('/familyHistory', function(req, res, next) {
  console.log("POST comment route"); //[1]
  var newcomment = new familyHistory(req.body); //[3]
  console.log(newcomment); //[3]
  newcomment.save(function(err, post) { //[4]
    if (err) return console.error(err);
    console.log(post);
    res.sendStatus(200);
  });
});

/* GET comments from database */
router.get('/familyHistory', function(req, res, next) {
  console.log("In the GET route");
    familyHistory.find(function(err,commentList) { //Calls the find() method on your database
    if (err) return console.error(err); //If there's an error, print it out
    else {
      console.log(commentList); //Otherwise console log the comments you found
      res.json(commentList); //Then send them      

    }
  })
});

module.exports = router;



