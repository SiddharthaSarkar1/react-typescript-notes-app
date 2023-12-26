import React from "react";
import "./Notes.css";
import { NoteProps, Color } from "./notes-type";
import Card from "../card/card";

const Notes = (props: NoteProps) => {
  return (
    <Card bgColor={props.priority && Color[props.priority]}
    height="2"
    padding="3"
    >
      <div>{props.text}</div>
    </Card>
  );
};

export default Notes;
