import React, { useState } from 'react';

import './App.css';
import Note from './components/notes/Note';
import { NotesArr } from './data';
import AddNote from './components/add-note/add-note';
import { NoteType } from './components/notes/notes-type';


function App() {

  const [notes, setNotes] = useState(NotesArr);

  const addNote = (note: NoteType) => {
    setNotes([note, ...notes])
  }

  return (
    <div className="App">
        <h1>Notes App</h1>
        <AddNote addNote={addNote} />
        <div className="">
          {
            notes.map((note) => (
              <Note key={note.id} text={note.text} priority={note.priority} />
            ))
          }
        </div>
    </div>
  );
}

export default App;
