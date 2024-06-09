const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
const Person = require('../Models/person');

//Creating and saving a new person
router.post('/person', (req,res) => {
    const person = new Person({
        name: req.params.person,
        age: req.body.age,
        favoriteFoods: req.body.favoriteFoods,
    });
    console.log(person);
    person.save((err, data) => {
        if (err) {
            res.send('This name has already used');
        } else res.send(data);
    });
});

//Creating many records
router.get('/creatingMany', (req,res) => {
    Person.create(req.body);
    res.send("");
});
module.exports = router;