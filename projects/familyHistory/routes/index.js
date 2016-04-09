var express = require('express');
var router = express.Router();


/* Set up mongoose in order to connect to mongo database */
var mongoose = require('mongoose'); //Adds mongoose as a usable dependency

mongoose.connect('mongodb://localhost/familyHistoryDB'); //Connects to a mongo database called "familyHistoryDB"

var commentSchema = mongoose.Schema({ //Defines the Schema for this database
  id: String,
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

var people = [
	{
		ID: 'LV56-C4R',
		Name: 'Ferentz Gombkoto',
		Birthdate: '',
		Birthplace: '',
		Baptism: '',
		Confirmation: '',
		Initiatory: '',
		Endowment: '',
		SealingSpouse: '',
		SealingParent: ''
	},
	{
                ID: 'LXQM-PKR',
                Name: 'Josef Gombkoto',
                Birthdate: '20 March 1751',
                Birthplace: 'Szendrő, Borsod, Hungary',
                Baptism: '22 July 2015',
                Confirmation: '22 July 2015',
                Initiatory: '21 January 2016',
                Endowment: '25 February 2016',
                SealingSpouse: '',
                SealingParent: ''
	},
	{
                ID: 'LXQM-P5R',
                Name: 'Erszebet Czudac',
                Birthdate: '',
                Birthplace: '',
                Baptism: '',
                Confirmation: '',
                Initiatory: '',
                Endowment: '',
                SealingSpouse: '',
                SealingParent: ''
	},
	{
                ID: 'LXQM-JP6',
                Name: 'Mihaly Gombkoto',
                Birthdate: '21 October 1786',
                Birthplace: 'Szendrő, Borsod, Hungary',
                Baptism: '16 July 2014',
                Confirmation: '16 July 2014',
                Initiatory: '30 August 2014',
                Endowment: '11 November 2014',
                SealingSpouse: '20 November 2015',
                SealingParent: ''
	},
	{
                ID: 'L6TJ-4TF',
                Name: 'Ersébeth Szabo',
                Birthdate: '1 February 1784',
                Birthplace: 'Szendrő, Borsod, Hungary',
                Baptism: '16 July 2014',
                Confirmation: '16 July 2014',
                Initiatory: '31 July 2014',
                Endowment: '5 August 2014',
                SealingSpouse: '',
                SealingParent: ''
	},
	{
                ID: 'LXQM-V34',
                Name: 'Maria Jevem',
                Birthdate: '1760',
                Birthplace: '',
                Baptism: '',
                Confirmation: '',
                Initiatory: '',
                Endowment: '',
                SealingSpouse: '',
                SealingParent: ''
	},
	{
                ID: 'L6TV-8KB',
                Name: 'Mária Gombkötö',
                Birthdate: '3 October 1818',
                Birthplace: 'Szendrő, Borsod, Hungary',
                Baptism: '16 July 2014',
                Confirmation: '16 July 2014',
                Initiatory: '13 August 2014',
                Endowment: '10 October 2014',
                SealingSpouse: '',
                SealingParent: ''
	}
];
