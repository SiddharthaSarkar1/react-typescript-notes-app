import { createContext } from "react";
import { NoteType } from "../../components/notes/notes-type";
import { ALL_ACTIONS } from "../../actions";

export type StateType = {
  notes: NoteType[];
  editMode: boolean;
  noteToBeEditted: NoteType | null;
};

export type ActionType = {
  type: ALL_ACTIONS;
  payload: any;
};

export const StateContext = createContext<{
  state: StateType;
  dispatch: (action: ActionType) => void;
}>({} as { state: StateType; dispatch: (action: ActionType) => void });
