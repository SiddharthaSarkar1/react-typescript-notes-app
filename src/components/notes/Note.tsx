import React, { useContext } from "react";
import "./Notes.css";
import { ColorDark, ColorLight, Priority } from "./notes-type";
import Card from "../card/card";
import { FaTrash, FaEdit } from "react-icons/fa";
import { ThemeContext } from "../../context/theme/theme";

type NoteProps = {
  id: string;
  text: string;
  priority?: Priority;
  editNote: (id: string) => void;
  deleteNote: (id: string) => void;
};

const Notes = (props: NoteProps) => {

  const theme = useContext(ThemeContext);

  return (
    <Card
      bgColor={
        theme === "dark"
          ? props.priority && ColorDark[props.priority]
          : props.priority && ColorLight[props.priority]
      }
      height="2"
      padding="3"
    >
      <>
        <div>{props.text}</div>
        <div className="right-corner">
          <FaEdit
            onClick={() => {
              props.editNote(props.id);
            }}
          />
          <FaTrash
            onClick={() => {
              props.deleteNote(props.id);
            }}
          />
        </div>
      </>
    </Card>
  );
};

export default Notes;
