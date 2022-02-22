const notes = require('express').Router();
const fs = require('fs');
let i = 0;

notes.get('/', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {res.json(JSON.parse(data))});
});

notes.post('/', (req, res) => {
    // Destructuring assignment for the items in req.body
    
    req.body.id = ++i;

    const note = req.body;

    const notesArray = require('../db/db.json');

    notesArray.push(note);

    fs.writeFile('./db/db.json', JSON.stringify(notesArray), (err) => { if(err) {console.log(err);}});

    res.json(note);

});

module.exports = notes;