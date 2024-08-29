import { createSelector } from "reselect";

const getDefaultCategoriesSelector = (state) => {
  return state.categories.defaultCategories;
};

export const getDefaultCategories = createSelector(
  [getDefaultCategoriesSelector],
  (getDefaultCategoriesSelector) => {
    return getDefaultCategoriesSelector;
  }
);

const getUserCategoriesSelector = (state) => {
  return state.categories.userCategories;
};

export const getUserCategories = createSelector(
  [getUserCategoriesSelector],
  (getUserCategoriesSelector) => {
    return getUserCategoriesSelector;
  }
);
const getSelectedCategoryIndexSelector = (state) => {
  return state.categories.selectedCategoryIndex;
};

export const getSelectedCategoryIndex = createSelector(
  [getSelectedCategoryIndexSelector],
  (getSelectedCategoryIndexSelector) => {
    return getSelectedCategoryIndexSelector;
  }
);
