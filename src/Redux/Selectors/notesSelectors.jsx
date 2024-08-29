import { createSelector } from "reselect";

const getAllNotesSelector = (state) => {
  return state.notes.allNotes;
};

export const getAllNotes = createSelector(
  [getAllNotesSelector],
  (getAllNotesSelector) => {
    return getAllNotesSelector;
  }
);

const getSelectedNoteIdSelector = (state) => {
  return state.notes.selectedNoteId;
};

export const getSelectedNoteId = createSelector(
  [getSelectedNoteIdSelector],
  (getSelectedNoteIdSelector) => {
    return getSelectedNoteIdSelector;
  }
);
const getSelectedNoteForOptionSelector = (state) => {
  return state.notes.selectedNoteForOption;
};

export const getSelectedNoteForOption = createSelector(
  [getSelectedNoteForOptionSelector],
  (getSelectedNoteForOptionSelector) => {
    return getSelectedNoteForOptionSelector;
  }
);
