import React, { useContext, useEffect, useState } from "react";
import "./add-note.css";
import { NoteType, Priority } from "../notes/notes-type";

import { v4 as uuidv4 } from "uuid";
import Card from "../card/card";
import { ThemeContext } from "../../context/theme/theme";
import { StateContext } from "../../context/state/state";

type AddNoteProps = {
  addNote: (note: NoteType) => void,
  updateNote: (updatedNote: NoteType) => void,
};

const AddNote = (props: AddNoteProps) => {
  const [text, setText] = useState("");

  const [priority, setPriority] = useState<Priority>("low");

  const theme = useContext(ThemeContext);
  const { state, dispatch } = useContext(StateContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const setNoteContent = (note: NoteType) => {
    setText(note.text);
    setPriority(note.priority);
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if(state.editMode) {
      state.noteToBeEditted && props.updateNote({
        text,
        priority,
        id: state.noteToBeEditted.id,
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
    if(state.noteToBeEditted && state.editMode){
    setNoteContent(state.noteToBeEditted)
    }
  }, [state.noteToBeEditted, state.editMode]);
  

  return (
    <Card bgColor={theme === 'dark' ? '#333' : '#ddd'} height="2" padding="3">
      <form className="add-note">
        <input type="text" onChange={handleChange} value={text} />
        <select onChange={handleSelect} value={priority}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button onClick={handleClick}>{ state.editMode ? 'Edit' :  'Add' }</button>
      </form>
    </Card>
  );
};

export default AddNote;
