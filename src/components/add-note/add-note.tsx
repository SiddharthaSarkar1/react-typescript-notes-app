import React, { useEffect, useState } from "react";
import "./add-note.css";
import { NoteType, Priority } from "../notes/notes-type";

import { v4 as uuidv4 } from "uuid";
import Card from "../card/card";

type AddNoteProps = {
  addNote: (note: NoteType) => void,
  editMode: boolean,
  noteToBeEditted: NoteType | null,
  updateNote: (updatedNote: NoteType) => void,
};

const AddNote = (props: AddNoteProps) => {
  const [text, setText] = useState("");

  const [priority, setPriority] = useState<Priority>("low");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const setNoteContent = (note: NoteType) => {
    setText(note.text);
    setPriority(note.priority);
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if(props.editMode) {
      props.noteToBeEditted && props.updateNote({
        text,
        priority,
        id: props.noteToBeEditted.id,
      });
    }else {
      props.addNote({
        text,
        priority,
        id: uuidv4(),
      });
    }
    setText("");
    setPriority("low");
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setPriority(e.target.value as Priority);
  };

  useEffect(() => {
    if(props.noteToBeEditted && props.editMode){
    setNoteContent(props.noteToBeEditted)
    }
  }, [props.noteToBeEditted, props.editMode]);
  

  return (
    <Card bgColor="#333" height="2" padding="3">
      <form className="add-note">
        <input type="text" onChange={handleChange} value={text} />
        <select onChange={handleSelect} value={priority}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button onClick={handleClick}>{ props.editMode ? 'Edit' :  'Add' }</button>
      </form>
    </Card>
  );
};

export default AddNote;
