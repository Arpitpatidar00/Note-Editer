//# Action Types
export const ADD_CATEGORY = "ADD_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const TOGGLE_EDIT_MODE = "TOGGLE_EDIT_MODE";
export const RENAME_CATEGORY = "RENAME_CATEGORY";

//# Action Creators

export const addCategoryAction = (categoryName) => {
  return {
    type: ADD_CATEGORY,
    payload: categoryName,
  };
};

export const deleteCategoryAction = (categoryId) => {
  return {
    type: DELETE_CATEGORY,
    payload: categoryId,
  };
};

export const selectCategoryAction = (categoryId) => {
  return {
    type: SELECT_CATEGORY,
    payload: categoryId,
  };
};

export const toggleEditModeAction = (categoryId) => {
  return {
    type: TOGGLE_EDIT_MODE,
    payload: categoryId,
  };
};

export const renameCategoryAction = (categoryId, categoryName) => {
  return {
    type: RENAME_CATEGORY,
    payload: { categoryId, categoryName },
  };
};
