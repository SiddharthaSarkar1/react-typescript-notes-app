import React from 'react';
import "./Notes.css"
import { NoteProps } from './notes-type';

const Notes = (props: NoteProps) => {
  return (
    <div className={`note ${props.priority}`}>
      {props.text}
    </div>
  )
}

export default Notes;
