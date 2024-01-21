import React, { useContext, useState } from "react";

import "./home.css";
import Note from "../../components/notes/Note";
import { NotesArr } from "../../data";
import AddNote from "../../components/add-note/add-note";
import { NoteType } from "../../components/notes/notes-type";
import { ThemeContext } from "../../context/theme/theme";

function Home() {
  const [notes, setNotes] = useState(NotesArr);
  const [editMode, setEditMode] = useState(false);
  const [noteToBeEditted, setNoteToBeEditted] = useState<NoteType | null>(null);

  const theme = useContext(ThemeContext);

  const addNote = (note: NoteType) => {
    setNotes([note, ...notes]);
  };

  const updateNote = (updatedNote: NoteType) => {
    const index = notes.findIndex((note) => note.id === updatedNote.id);
    let editedNotes = [...notes];
    editedNotes.splice(index, 1, updatedNote);
    setNotes(editedNotes);
    setEditMode(false);
  };

  const editNote = (id: string) => {
    console.log("edit", id);
    const note = notes.find((note) => note.id === id);
    setEditMode(true);
    if (note) {
      setNoteToBeEditted(note);
    }
  };

  const deleteNote = (id: string) => {
    const index = notes.findIndex((note) => note.id === id);
    let editedNotes = [...notes];
    editedNotes.splice(index, 1);
    setNotes(editedNotes);
  };

  return (
    
    <div className={`home ${theme}`}>
      <h1 className="glowing-text">Notes App</h1>
      <h4>Available Notes : {notes.length}</h4>
      <AddNote
        addNote={addNote}
        editMode={editMode}
        noteToBeEditted={noteToBeEditted}
        updateNote={updateNote}
      />
      <div className="">
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            priority={note.priority}
            editNote={editNote}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
    
  );
}

export default Home;
