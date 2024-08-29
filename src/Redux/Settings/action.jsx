export const TOGGLE_AUTO_SAVE = "TOGGLE_AUTO_SAVE";
export const TOGGLE_EDIT_MODE = "TOGGLE_EDIT_MODE";
export const CHANGE_AUTO_SAVE_DELAY = "CHANGE_AUTO_SAVE_DELAY";
export const CHANGE_SORT_TYPE = "CHANGE_SORT_TYPE";
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const TOGGLE_EDITOR = "TOGGLE_EDITOR";
export const TOGGLE_PANEL = "TOGGLE_PANEL";
export const TOGGLE_SETTINGS_TAB = "TOGGLE_SETTINGS_TAB";

//@ Action Creators:

export const toggleAutoSaveAction = () => {
  return {
    type: TOGGLE_AUTO_SAVE,
  };
};

export const toggleEditModeAction = () => {
  return {
    type: TOGGLE_EDIT_MODE,
  };
};

export const changeAutoSaveDelayAction = (autoSaveDelay) => {
  return {
    type: CHANGE_AUTO_SAVE_DELAY,
    payload: autoSaveDelay,
  };
};

export const changeSortTypeAction = (sortType) => {
  return {
    type: CHANGE_SORT_TYPE,
    payload: sortType,
  };
};

export const toggleSidebarAction = (val) => {
  return {
    type: TOGGLE_SIDEBAR,
    payload: val,
  };
};

export const toggleEditorAction = (val) => {
  return {
    type: TOGGLE_EDITOR,
    payload: val,
  };
};
export const togglePanelAction = (val) => {
  return {
    type: TOGGLE_PANEL,
    payload: val,
  };
};
export const toggleSettingsTabAction = (val) => {
  return {
    type: TOGGLE_SETTINGS_TAB,
    payload: val,
  };
};
