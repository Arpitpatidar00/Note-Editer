//@ Action Types
export const ADD_NOTE = "ADD_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const TEMP_DELETE_NOTE = "TEMP_DELETE_NOTE";
export const RESTORE_TEMP_DELETE_NOTE = "RESTORE_TEMP_DELETE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const SELECT_NOTE = "SELECT_NOTE";
export const RESET_SELECTED_NOTE = "RESET_SELECTED_NOTE";
export const ADD_TO_FAV = "ADD_TO_FAV";
export const SELECT_NOTE_FOR_OPTION = "SELECT_NOTE_FOR_OPTION";
export const DELETE_ALL_TRASH_NOTES = "DELETE_ALL_TRASH_NOTES";
export const MOVE_TO_CATEGORY = "MOVE_TO_CATEGORY";
export const IMPORT_BACKUP = "IMPORT_BACKUP";

//@ Action Creators:

export const addNoteAction = (categoryIndex) => {
  return {
    type: ADD_NOTE,
    payload: categoryIndex,
  };
};

export const updateNoteAction = (newNote) => {
  return {
    type: UPDATE_NOTE,
    payload: newNote,
  };
};

export const tempDeleteNoteAction = (noteId) => {
  return {
    type: TEMP_DELETE_NOTE,
    payload: noteId,
  };
};

export const deleteNoteAction = (noteId) => {
  return {
    type: DELETE_NOTE,
    payload: noteId,
  };
};

export const restoreNoteAction = (noteId) => {
  return {
    type: RESTORE_TEMP_DELETE_NOTE,
    payload: noteId,
  };
};

export const deleteAllTrashNotesAction = () => {
  return {
    type: DELETE_ALL_TRASH_NOTES,
  };
};

export const addToFavAction = (noteId) => {
  return {
    type: ADD_TO_FAV,
    payload: noteId,
  };
};

export const selectNoteAction = (noteId) => {
  return {
    type: SELECT_NOTE,
    payload: noteId,
  };
};

export const resetSelectedNoteAction = () => {
  return {
    type: RESET_SELECTED_NOTE,
    payload: null,
  };
};

export const selectNoteForOptionAction = (noteId) => {
  return {
    type: SELECT_NOTE_FOR_OPTION,
    payload: noteId,
  };
};

export const moveToCategoryAction = (noteId, categoryId) => {
  return {
    type: MOVE_TO_CATEGORY,
    payload: { categoryId, noteId },
  };
};

export const importBackupAction = (allNotes) => {
  return {
    type: IMPORT_BACKUP,
    payload: allNotes,
  };
};
