// import packages:
import React from 'react';
import { createStore, combineReducers } from "redux";
import ReactDomServer from "react-dom/server";
import moment from "moment";

// import icons
import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

// import reducers
import notesReducer from "./Notes/notesReducer";
import categoriesReducer from "./Category/categoryReducer";
import settingsReducer from "./Settings/SettingReducer";

// initial Store state if there is nothing in local storage:
const initialState = {
  notes: {
    allNotes: [
      {
        id: "001",
        category_id: "1",
        title: "Welcome Note",
        fav: false,
        createdAt: moment(),
        content: {
          blocks: [
            {
              key: "8i090",
              text: "Hello User :)",
              type: "header-three",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 13,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "49adm",
              text: "# WELCOME to The.Editor",
              type: "code",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 23,
                  style: "CODE",
                },
                {
                  offset: 0,
                  length: 23,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "7mtd7",
              text: "The.Editor  is a clone app of  Takenote.dev  and is made for learning purpose only.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 83,
                  style: "fontfamily-Georgia",
                },
                {
                  offset: 0,
                  length: 83,
                  style: "fontsize-16",
                },
                {
                  offset: 0,
                  length: 10,
                  style: "BOLD",
                },
                {
                  offset: 31,
                  length: 13,
                  style: "ITALIC",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "5nfnm",
              text: "There are some changes in this version I used Draft.js as an editor and not a markdown editor so that normal users can also use it.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 131,
                  style: "fontfamily-Georgia",
                },
                {
                  offset: 0,
                  length: 131,
                  style: "fontsize-16",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "ris0",
              text: "",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "153lu",
              text: "# FEATURES:",
              type: "header-three",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 11,
                  style: "fontfamily-Arial",
                },
                {
                  offset: 0,
                  length: 11,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "5mrjg",
              text: "Docx format supported - take note in an easy manner and export them in your comfortable format which is supported in your doc readers.",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 134,
                  style: "fontsize-16",
                },
                {
                  offset: 0,
                  length: 22,
                  style: "BOLD",
                },
                {
                  offset: 0,
                  length: 134,
                  style: "fontfamily-Arial",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "8kjdk",
              text: "Preview Mode - see your note in preview mode to finalize your content.",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 70,
                  style: "fontsize-16",
                },
                {
                  offset: 0,
                  length: 70,
                  style: "fontfamily-Arial",
                },
                {
                  offset: 0,
                  length: 13,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "8vsq2",
              text: "WYSIWYG Editor - Rich text editor to provide you all the necessary features while making your notes.",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 100,
                  style: "fontsize-16",
                },
                {
                  offset: 0,
                  length: 100,
                  style: "fontfamily-Arial",
                },
                {
                  offset: 0,
                  length: 15,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "3r7hn",
              text: "Keyboard shortcuts - use the keyboard for all common tasks like creating notes, creating category, deleting note , toggle edit mode, open settings and other options.",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 165,
                  style: "fontsize-16",
                },
                {
                  offset: 0,
                  length: 165,
                  style: "fontfamily-Arial",
                },
                {
                  offset: 0,
                  length: 18,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "p0u1",
              text: "Drag & Drop - drag your notes to any category or in fac notes or in trash.",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 74,
                  style: "fontsize-16",
                },
                {
                  offset: 0,
                  length: 74,
                  style: "fontfamily-Arial",
                },
                {
                  offset: 0,
                  length: 11,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "9bu04",
              text: "Search notes - easily search all notes or notes within a category.",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 66,
                  style: "fontsize-16",
                },
                {
                  offset: 0,
                  length: 66,
                  style: "fontfamily-Arial",
                },
                {
                  offset: 0,
                  length: 12,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "e7bsm",
              text: "No database - notes are only stored in the browser's local storage and are available for download and export to you alone.",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 122,
                  style: "fontsize-16",
                },
                {
                  offset: 0,
                  length: 122,
                  style: "fontfamily-Arial",
                },
                {
                  offset: 0,
                  length: 11,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "3jq7q",
              text: "",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "4ibih",
              text: "Enjoy Friends, it's all yours... 🚀😄",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 35,
                  style: "fontfamily-Impact",
                },
                {
                  offset: 0,
                  length: 35,
                  style: "fontsize-18",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "e7sop",
              text: "",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
          entityMap: {},
        },
      },
    ],
    selectedNoteId: null,
    selectedNoteForOption: null,
  },
  categories: {
    defaultCategories: [
      {
        id: "0",
        name: "Quick Notes",
        icon: ReactDomServer.renderToString(<NotesOutlinedIcon />),
      },
      {
        id: "1",
        name: "All Notes",
        icon: ReactDomServer.renderToString(<DescriptionOutlinedIcon />),
      },
      {
        id: "2",
        name: "Favorites",
        icon: ReactDomServer.renderToString(<BookmarkBorderOutlinedIcon />),
      },
      {
        id: "3",
        name: "Trash",
        icon: ReactDomServer.renderToString(<DeleteOutlinedIcon />),
      },
    ],
    userCategories: [],
    selectedCategoryIndex: "1",
  },
  settings: {
    autoSave: false,
    editMode: false,
    autoSaveDelay: 5,
    sortType: "Date Created",
    sidebarOpen: true,
    settingsTabOpen: true,
    showEditor: true,
    showPanel: true,
  },
};

const saveToLocalStorage = (state) => {
  try {
    const newState = {
      ...state,
      settings: {
        ...state.settings,
        sidebarOpen: true,
        settingsTabOpen: true,
        showEditor: true,
        showPanel: true,
      },
    };
    const serializedState = JSON.stringify(newState);
    localStorage.setItem("the.editor-store", serializedState);
  } catch (e) {
    console.warn(e);
    alert(e.message);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("the.editor-store");
    if (serializedState === null) return initialState;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn(e);
    return initialState;
  }
};

const rootReducer = combineReducers({
  notes: notesReducer,
  categories: categoriesReducer,
  settings: settingsReducer,
});

// Store Initialization
const store = createStore(rootReducer, loadFromLocalStorage());

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;

