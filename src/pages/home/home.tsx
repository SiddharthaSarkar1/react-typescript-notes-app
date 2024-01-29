import { useContext } from "react";

import "./home.css";
import Note from "../../components/notes/Note";
import AddNote from "../../components/add-note/add-note";
import { ThemeContext } from "../../context/theme/theme";
import { StateContext } from "../../context/state/state";
import { DELETE_NOTE, SET_EDIT_MODE, SET_NOTE_FOR_EDIT } from "../../actions";

function Home() {
  // const [notes, setNotes] = useState(NotesArr);
  // const [editMode, setEditMode] = useState(false);
  // const [noteToBeEditted, setNoteToBeEditted] = useState<NoteType | null>(null);

  const theme = useContext(ThemeContext);
  const { state, dispatch } = useContext(StateContext);

  const editNote = (id: string) => {
    console.log("edit", id);
    const note = state.notes.find((note) => note.id === id);
    dispatch({ type: SET_EDIT_MODE, payload: true });
    if (note) {
      dispatch({ type: SET_NOTE_FOR_EDIT, payload: note });
    }
  };

  const deleteNote = (id: string) => {
    dispatch({ type: DELETE_NOTE, payload: id });
  };

  return (
    <div className={`home ${theme}`}>
      <h1 className="glowing-text">Notes App</h1>
      <h4>Available Notes : {state.notes.length}</h4>
      <AddNote />
      <div className="">
        {state.notes.map((note) => (
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
