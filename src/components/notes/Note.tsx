import React from "react";
import "./Notes.css";
import { Color, Priority } from "./notes-type";
import Card from "../card/card";
import { FaTrash, FaEdit } from "react-icons/fa";

type NoteProps = {
  id: string,
  text: string,
  priority?: Priority,
  editNote: (id: string) => void,
  deleteNote: (id: string) => void,
};

const Notes = (props: NoteProps) => {
  return (
    <Card
      bgColor={props.priority && Color[props.priority]}
      height="2"
      padding="3"
    >
      <>
        <div>{props.text}</div>
        <div className="right-corner">
          <FaEdit onClick={() => { props.editNote(props.id) }} />
          <FaTrash onClick={ () => { props.deleteNote(props.id) } } />
        </div>
      </>
    </Card>
  );
};

export default Notes;
