const fs = require('fs');
const path = require('path');

function findById(id, notesArray) {
    const result = notesArray.filter(notes => notes.id === id)[0];
    return result;
};

function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return note;
};

function deleteNote(id, notesArray) {
    const deleteNote = notesArray.filter(notes => notes.id === id)[0];
    notesArray.splice(deleteNote, 1);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return notesArray;
};

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
};

  module.exports = {
    findById,
    createNote,
    deleteNote,
    validateNote
  };