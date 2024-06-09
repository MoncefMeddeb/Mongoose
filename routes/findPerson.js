const express = require('express'),
router = express.Router();
const Person = require('../Models/person');

//finding person by name
router.get('/:person', (req,res) => {
    Person.find({name : req.params.person})
    .exec()
    .then((docs) => {
        console.log(docs);
        if (docs[0]) {
            res.send(docs)
        } else res.send('Person not found!');

    });
});

//finding person by favorite food
router.get('/food/:food', (req,res) => {
    Person.findOne({favoriteFoods: req.params.food}, (err,result) => {
        if (err) {
            res.send(err);
        } else {
            if (result) {
                res.send(result);
            } else res.send('we dont have person who like ${req.params.food}');
        }
    });
});

//finding person by id
router.get('/id/:id', (req,res) => {
    Person.finById({_id: req.params.id}, (err,data) => {
        console.log(result);
        if (err) {
            res.send('Person not found',err);
        } else {
           res.send(data);
        } 
    });
});
module.exports = router;