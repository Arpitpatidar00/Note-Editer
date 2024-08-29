import { createSelector } from "reselect";

const getAutoSaveSelector = (state) => {
  return state.settings.autoSave;
};

export const getAutoSave = createSelector(
  [getAutoSaveSelector],
  (getAutoSaveSelector) => {
    return getAutoSaveSelector;
  }
);

const getEditModeSelector = (state) => {
  return state.settings.editMode;
};

export const getEditMode = createSelector(
  [getEditModeSelector],
  (getEditModeSelector) => {
    return getEditModeSelector;
  }
);

const getAutoSaveDelaySelector = (state) => {
  return state.settings.autoSaveDelay;
};

export const getAutoSaveDelay = createSelector(
  [getAutoSaveDelaySelector],
  (getAutoSaveDelaySelector) => {
    return getAutoSaveDelaySelector;
  }
);

const getSortTypeSelector = (state) => {
  return state.settings.sortType;
};

export const getSortType = createSelector(
  [getSortTypeSelector],
  (getSortTypeSelector) => {
    return getSortTypeSelector;
  }
);

const getSidebarOpenSelector = (state) => {
  return state.settings.sidebarOpen;
};

export const getSidebarOpen = createSelector(
  [getSidebarOpenSelector],
  (getSidebarOpenSelector) => {
    return getSidebarOpenSelector;
  }
);

const getSettingsTabOpenSelector = (state) => {
  return state.settings.settingsTabOpen;
};

export const getSettingsTabOpen = createSelector(
  [getSettingsTabOpenSelector],
  (getSettingsTabOpenSelector) => {
    return getSettingsTabOpenSelector;
  }
);

const getShowEditorSelector = (state) => {
  return state.settings.showEditor;
};

export const getShowEditor = createSelector(
  [getShowEditorSelector],
  (getShowEditorSelector) => {
    return getShowEditorSelector;
  }
);

const getShowPanelSelector = (state) => {
  return state.settings.showPanel;
};

export const getShowPanel = createSelector(
  [getShowPanelSelector],
  (getShowPanelSelector) => {
    return getShowPanelSelector;
  }
);
