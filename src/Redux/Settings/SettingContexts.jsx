import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
    useMemo
  } from "react";
  
  const SettingContexts = createContext();
  
  export const useSettings = () => {
    return useContext(SettingContexts);
  };
  
  const SettingContextsProvider = ({ children }) => {
    const [toggleSidebar, setToggleSideBar] = useState(true);
    const [toggleSettingsTab, setToggleSettingsTab] = useState(true);
    const [showEditor, setShowEditor] = useState(true);
    const [showPanel, setShowPanel] = useState(true);
    const [settingsState, setSettingsState] = useState(() => {
      const localData = localStorage.getItem("the.editor-settings");
  
      return localData
        ? JSON.parse(localData)
        : {
            editMode: false,
            autoSave: false,
            autoSaveDelay: 5,
            sortType: "Date Created",
          };
    });
  
    //@ Handlers
    const toggleEditMode = useCallback(
      (manual) => {
        if (manual) {
          if (manual === "ON")
            setSettingsState({
              ...settingsState,
              editMode: true,
            });
          else
            setSettingsState({
              ...settingsState,
              editMode: false,
            });
        } else {
          setSettingsState({
            ...settingsState,
            editMode: !settingsState.editMode,
          });
        }
      },
      [settingsState.editMode]
    );
  
    const toggleAutoSave = useCallback(() => {
      setSettingsState({
        ...settingsState,
        autoSave: !settingsState.autoSave,
      });
    }, [settingsState.autoSave]);
  
    const changeAutoSaveDelay = useCallback(
      (autoSaveDelay) => {
        setSettingsState({
          ...settingsState,
          autoSaveDelay: autoSaveDelay,
        });
      },
      [settingsState.autoSaveDelay]
    );
  
    const changeSortingType = useCallback(
      (sortType) => {
        setSettingsState({
          ...settingsState,
          sortType: sortType,
        });
      },
      [settingsState.sortType]
    );
  
    const toggleSidebarHandler = useCallback(
      (val) => {
        if (val === "ON") {
          setToggleSideBar(true);
        } else if (val === "OFF") {
          setToggleSideBar(false);
        } else {
          setToggleSideBar(!toggleSidebar);
        }
      },
      [toggleSidebar]
    );
  
    const toggleShowEditorHandler = useCallback(
      (val) => {
        if (val === "SHOW") {
          setShowEditor(true);
        } else if (val === "HIDE") {
          setShowEditor(false);
        } else {
          setShowEditor(!showEditor);
        }
      },
      [showEditor]
    );
  
    const toggleShowPanelHandler = useCallback(
      (val) => {
        if (val === "SHOW") {
          setShowPanel(true);
        } else if (val === "HIDE") {
          setShowPanel(false);
        } else {
          setShowPanel(!showPanel);
        }
      },
      [showPanel]
    );
  
    const toggleSettingsTabHandler = useCallback(
      (val) => {
        if (val === "ON") {
          setToggleSettingsTab(true);
        } else if (val === "OFF") {
          setToggleSettingsTab(false);
        } else {
          setToggleSettingsTab(!toggleSettingsTab);
        }
      },
      [toggleSettingsTab]
    );
  
    useEffect(() => {
      localStorage.setItem("the.editor-settings", JSON.stringify(settingsState));
    }, [settingsState]);
  
    const ctxValue = useMemo(() => ({
      autoSave: settingsState.autoSave,
      toggleAutoSave,
      autoSaveDelay: settingsState.autoSaveDelay,
      changeAutoSaveDelay,
      editMode: settingsState.editMode,
      toggleEditMode,
      sortType: settingsState.sortType,
      changeSortingType,
      toggleSidebar,
      toggleSidebarHandler,
      toggleShowEditorHandler,
      showEditor,
      showPanel,
      toggleShowPanelHandler,
      toggleSettingsTab,
      toggleSettingsTabHandler,
    }));
    return (
      <SettingContexts.Provider value={ctxValue}>
        {children}
      </SettingContexts.Provider>
    );
  };
  
  export default SettingContextsProvider;
  