import { createContext } from "react";
import { NoteType } from "../../components/notes/notes-type";

export type StateType = {
  notes: NoteType[];
  editMode: boolean;
  noteToBeEditted: NoteType | null;
};

export const StateContext = createContext<{ state: StateType; dispatch: any }>(
  {} as { state: StateType; dispatch: any }
);
