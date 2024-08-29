// import action Types
import React from 'react';
import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    RENAME_CATEGORY,
    SELECT_CATEGORY,
    TOGGLE_EDIT_MODE,
  } from "./actions";
  
  // import packages
  import  {v1 as uuid} from "uuid"
  import ReactDomServer from "react-dom/server";
  
  // import icons
  import FolderOpenIcon from "@mui/icons-material/FolderOpen";
  
  const categoriesReducer = (state = {}, action) => {
    switch (action.type) {
      case ADD_CATEGORY:
        return {
          ...state,
          userCategories: [
            ...state.userCategories,
            {
              id: uuid(),
              icon: ReactDomServer.renderToString(<FolderOpenIcon />),
              name: action.payload,
              editMode: false,
            },
          ],
        };
  
      case SELECT_CATEGORY:
        return {
          ...state,
          selectedCategoryIndex: action.payload,
        };
  
      case TOGGLE_EDIT_MODE:
        return {
          ...state,
          userCategories: state.userCategories.map((category) => {
            if (category.id === action.payload) {
              return {
                ...category,
                editMode: !category.editMode,
              };
            }
            return {
              ...category,
            };
          }),
        };
  
      case RENAME_CATEGORY:
        return {
          ...state,
          userCategories: state.userCategories.map((category) => {
            if (category.id === action.payload.categoryId) {
              return {
                ...category,
                name: action.payload.categoryName,
              };
            }
            return {
              ...category,
            };
          }),
        };
  
      case DELETE_CATEGORY:
        return {
          ...state,
          userCategories: state.userCategories.filter(
            (category) => category.id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default categoriesReducer;
  