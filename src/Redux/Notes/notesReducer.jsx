import {
    ADD_NOTE,
    ADD_TO_FAV,
    DELETE_NOTE,
    RESET_SELECTED_NOTE,
    SELECT_NOTE,
    UPDATE_NOTE,
    TEMP_DELETE_NOTE,
    RESTORE_TEMP_DELETE_NOTE,
    SELECT_NOTE_FOR_OPTION,
    DELETE_ALL_TRASH_NOTES,
    MOVE_TO_CATEGORY,
    IMPORT_BACKUP,
  } from "./actions";
  import {v1 as uuid} from "uuid";
  import moment from "moment";
  
  const notesReducer = (state = {}, action) => {
    switch (action.type) {
      case ADD_NOTE:
        const _id = uuid();
        return {
          ...state,
          allNotes: [
            {
              id: _id,
              category_id: action.payload,
              title: "New Note",
              fav: action.payload === "2" ? true : false,
              createdAt: moment(),
            },
            ...state.allNotes,
          ],
          selectedNoteId: _id,
        };
  
      case SELECT_NOTE:
        return {
          ...state,
          allNotes: state.allNotes.map((note) => {
            if (note.id === action.payload) {
              return {
                ...note,
                active: true,
              };
            }
            return {
              ...note,
              active: false,
            };
          }),
          selectedNoteId: action.payload,
        };
  
      case RESET_SELECTED_NOTE:
        return {
          ...state,
          allNotes: state.allNotes.map((note) => ({
            ...note,
            active: false,
          })),
          selectedNoteId: action.payload,
        };
  
      case UPDATE_NOTE:
        return {
          ...state,
          allNotes: state.allNotes.map((note) => {
            if (note.id === action.payload.id) {
              return {
                ...note,
                title:
                  action.payload.title !== "" ? action.payload.title : note.title,
                content: action.payload.content,
                lastSaved: action.payload.lastSaved,
              };
            }
            return {
              ...note,
            };
          }),
        };
  
      case ADD_TO_FAV:
        return {
          ...state,
          allNotes: state.allNotes.map((note) => {
            if (note.id === action.payload) {
              return {
                ...note,
                fav: !note.fav,
              };
            }
            return {
              ...note,
            };
          }),
        };
  
      case TEMP_DELETE_NOTE:
        return {
          ...state,
          allNotes: state.allNotes.map((note) => {
            if (note.id === action.payload) {
              return {
                ...note,
                previous_category_id: note.category_id,
                category_id: "3",
              };
            }
            return {
              ...note,
            };
          }),
          selectedNoteId: null,
        };
  
      case RESTORE_TEMP_DELETE_NOTE:
        return {
          ...state,
          allNotes: state.allNotes.map((note) => {
            if (note.id === action.payload) {
              return {
                ...note,
                previous_category_id: null,
                category_id: note.previous_category_id,
              };
            }
            return {
              ...note,
            };
          }),
          selectedNoteId: null,
        };
  
      case DELETE_NOTE:
        return {
          ...state,
          allNotes: state.allNotes.filter((note) => note.id !== action.payload),
        };
  
      case DELETE_ALL_TRASH_NOTES:
        return {
          ...state,
          allNotes: state.allNotes.filter((note) => note.category_id !== "3"),
        };
  
      case SELECT_NOTE_FOR_OPTION:
        return {
          ...state,
          selectedNoteForOption: state.allNotes.filter(
            (note) => note.id === action.payload
          )[0],
        };
  
      case MOVE_TO_CATEGORY:
        return {
          ...state,
          allNotes: state.allNotes.map((note) => {
            if (note.id === action.payload.noteId) {
              return {
                ...note,
                category_id: action.payload.categoryId,
              };
            }
            return {
              ...note,
            };
          }),
        };
  
      case IMPORT_BACKUP:
        return {
          ...state,
          allNotes: [...action.payload],
        };
  
      default:
        return state;
    }
  };
  
  export default notesReducer;
  