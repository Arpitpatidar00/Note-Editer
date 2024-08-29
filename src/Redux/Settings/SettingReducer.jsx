import {
    TOGGLE_AUTO_SAVE,
    TOGGLE_EDIT_MODE,
    CHANGE_AUTO_SAVE_DELAY,
    CHANGE_SORT_TYPE,
    TOGGLE_SIDEBAR,
    TOGGLE_EDITOR,
    TOGGLE_PANEL,
    TOGGLE_SETTINGS_TAB,
  } from "./action";
  
  const settingsReducer = (state = {}, { type, payload }) => {
    switch (type) {
      case TOGGLE_AUTO_SAVE:
        return { ...state, autoSave: !state.autoSave };
  
      case TOGGLE_EDIT_MODE:
        return {
          ...state,
          editMode: payload === "TOGGLE" ? !state.editMode : payload,
        };
  
      case CHANGE_AUTO_SAVE_DELAY:
        return { ...state, autoSaveDelay: payload };
  
      case CHANGE_SORT_TYPE:
        return { ...state, sortType: payload };
  
      case TOGGLE_SIDEBAR:
        return {
          ...state,
          sidebarOpen: payload === "TOGGLE" ? !state.sidebarOpen : payload,
        };
  
      case TOGGLE_SETTINGS_TAB:
        return {
          ...state,
          settingsTabOpen:
            payload === "TOGGLE" ? !state.settingsTabOpen : payload,
        };
  
      case TOGGLE_EDITOR:
        return {
          ...state,
          showEditor: payload === "TOGGLE" ? !state.showEditor : payload,
        };
  
      case TOGGLE_PANEL:
        return {
          ...state,
          showPanel: payload === "TOGGLE" ? !state.showPanel : payload,
        };
  
      default:
        return state;
    }
  };
  
  export default settingsReducer;
  