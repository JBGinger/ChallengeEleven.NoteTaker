const router = require('express').Router();
const { findById, createNote, deleteNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
      } else {
        res.send(404);
      }
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('This note is not properly formatted.');
    } else {
        const note = createNote(req.body, notes);
        res.json(note);
      }
});

router.post('/')

module.exports = router;