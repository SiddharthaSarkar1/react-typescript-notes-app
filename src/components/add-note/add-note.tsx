import React, { useState } from "react";
import './add-note.css';
import { NoteType } from "../notes/notes-type";

import { v4 as uuidv4 } from 'uuid';    

type AddNoteProps = {
    addNote: (note: NoteType) => void
}

const AddNote = (props: AddNoteProps) => {

    const [text, setText] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        props.addNote({
            text,
            priority: 'high',
            id: uuidv4()
        })
    }

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        console.log(e.target.value);
    }

  return (
    <div>
      <form className="add-note">
        <input type="text" onChange={handleChange} />
        <select onChange={handleSelect}>
            <option value="high">Migh</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
};

export default AddNote;
