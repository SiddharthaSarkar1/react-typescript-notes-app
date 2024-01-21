import React, { useContext, useReducer, useState } from "react";

import "./App.css";
import { ThemeContext } from "./context/theme/theme";
import Home from "./pages/home/home";
import Switch from "react-switch";
import { FaSun, FaMoon } from "react-icons/fa";
import { NoteType } from "./components/notes/notes-type";
import { StateContext, StateType } from "./context/state/state";
import { NotesArr } from "./data";

function App() {
  const [theme, setTheme] = useState("light");
  const [checked, setChecked] = useState(false);

  const [state, dispatch] = useReducer(
    (state: StateType, action: { type: string; payload: any }) => {
      switch (action.type) {
        case "SET_EDIT_MODE":
          return { ...state, editMode: action.payload };
        case "SET_NOTE_FOR_EDIT":
          return { ...state, noteToBeEditted: action.payload };
        case "ADD_NOTE":
          return { ...state, notes: [action.payload, ...state.notes] };
        case "DELETE_NOTE":
          const index = state.notes.findIndex(
            (note) => note.id === action.payload
          );
          let editedNotes = [...state.notes];
          editedNotes.splice(index, 1);
          return { ...state, notes: editedNotes };
        case "UPDATE_NOTE":
          const indexUpdated = state.notes.findIndex(
            (note) => note.id === action.payload.id
          );
          let editedNotesUpdated = [...state.notes];
          editedNotesUpdated.splice(indexUpdated, 1, action.payload);
          // console.log(editedNotesUpdated)
          return { ...state, notes: editedNotesUpdated };
        default:
          return state;
      }
    },
    { notes: NotesArr, editMode: false, noteToBeEditted: null }
  );

  const changeHandler = (check: boolean) => {
    setChecked(!checked);
    if (check) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={theme}>
        <Switch
          className="react-switch"
          uncheckedIcon={
            <FaMoon
              size={20}
              color="white"
              style={{ paddingTop: "3px", paddingRight: "4px", float: "right" }}
            />
          }
          checkedIcon={
            <FaSun
              size={20}
              color="#fffb00"
              style={{ paddingTop: "3px", paddingLeft: "4px", float: "left" }}
            />
          }
          onChange={changeHandler}
          checked={checked}
          offColor="#333"
          onColor="#640000"
        />
        <Home />
      </ThemeContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
