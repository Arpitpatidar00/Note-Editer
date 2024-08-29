// import packages
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";

// import redux selectors and actions

// import styles:
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  MenuItem,
  Switch,
  TextField,
  makeStyles,
  withStyles
} from "@material-ui/core";
// import { makeStyles , withStyles } from "@mui/styles";

import MenuIcon  from "@mui/icons-material/Menu";
import {
  getAutoSave,
  getAutoSaveDelay,
  getEditMode,
  getSortType,
} from "../../../Redux/Selectors/settingsSelectors";
import { toggleEditModeAction } from "../../../Redux/Category/actions";
import {
  changeAutoSaveDelayAction,
  changeSortTypeAction,
  toggleAutoSaveAction,
  toggleSettingsTabAction,
} from "../../../Redux/Settings/action";
import { LocalConvenienceStoreOutlined } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  cssTextField: {
    "& label.Mui-focused": {
      color: theme.customTheme.syntax,
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: theme.customTheme.bg,
    },
    "& .MuiFilledInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: theme.customTheme.syntax,
      },
    },

    ["@media (max-width:590px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "90%",
    },
  },

  list: {
    "& .MuiListSubheader-sticky": {
      position: "static",
    },

    "& .MuiListItem-container": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    "& .MuiListItemSecondaryAction-root": {
      position: "static",
      transform: "none",
      textAlign: "right",
    },

    "& .MuiListItem-secondaryAction": {
      paddingRight: "0",
    },
  },

  delayInputField: {
    marginLeft: "0.5rem",

    ["@media (max-width:674px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "100%",
    },
  },

  // listItem: {
  //   "& .MuiListItem-container": {},
  // },

  divider: {
    margin: "0.5rem 1rem",
  },

  secondaryAction: {
    textAlign: "right",
  },

  menuIconWrapper: {
    padding: "0.1rem",
    marginRight: "0.5rem",
    borderRadius: "5px",
    transition: "0.3s ease",
    display: "none",

    ["@media (max-width:878px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: "flex",
    },

    "&:hover": {
      backgroundColor: theme.customTheme.syntax,
      color: theme.customTheme.ui,
    },
  },
}));

const CustomSwitch = withStyles((theme) => ({
  switchBase: {
    color: "#92b491",
    "&$checked": {
      color: theme.customTheme.bg,
    },
    "&$checked + $track": {
      backgroundColor: "#77a275",
    },
  },
  checked: {},
  track: {
    backgroundColor: "#a7c3a7",
  },
}))(Switch);

const PreferencesPanel = () => {
  //@ Consuming Contexts:
  const editMode = useSelector(getEditMode);
  const autoSave = useSelector(getAutoSave);
  const autoSaveDelay = useSelector(getAutoSaveDelay);
  const sortType = useSelector(getSortType);
  const dispatch = useDispatch();

  //@ States & Variables:
  const classes = useStyles();

  //@ Event Handlers:

  const handleToggle = () => {
    dispatch(toggleEditModeAction("TOGGLE"));
  };

  const handleAutoSaveToggle = () => {
    dispatch(toggleAutoSaveAction());
  };

  const handleChange = (event) => {
    dispatch(changeSortTypeAction(event.target.value));
  };

  const handleAutoSaveDelayChange = (event) => {
    dispatch(changeAutoSaveDelayAction(event.target.value));
  };

  const toggleSettingsTabHandler = () => {
    dispatch(toggleSettingsTabAction("TOGGLE"));
  };

  return (
    <div className={classes.root}>
      {/* <Typography variant="h6">Preferences</Typography> */}
      <List
        className={classes.list}
        subheader={
          <ListSubheader>
            <Box display="flex" alignItems="center">
              <Box
                className={classes.menuIconWrapper}
                display="flex"
                alignItems="center"
                justifyContent="center"
                onClick={toggleSettingsTabHandler}>
                <MenuIcon />
              </Box>
              Preferences
            </Box>
          </ListSubheader>
        }>
        <ListItem className={classes.listItem}>
          <ListItemText
            id="switch-list-label-editMode"
            primary="Edit Mode"
            secondary="Controls whether note edit mode is enabled by default"
          />
          <ListItemSecondaryAction>
            <CustomSwitch
              edge="end"
              onChange={handleToggle}
              checked={editMode}
              inputProps={{ "aria-labelledby": "switch-list-label-editMode" }}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem className={classes.listItem}>
          <ListItemText
            id="switch-list-label-autoSave"
            primary="Auto Save"
            secondary="Controls whether note will automatically save."
          />
          <ListItemSecondaryAction className={classes.secondaryAction}>
            <CustomSwitch
              edge="end"
              onChange={handleAutoSaveToggle}
              checked={autoSave}
              inputProps={{ "aria-labelledby": "switch-list-label-autoSave" }}
            />
            <TextField
              id="autoSave-delay"
              size="small"
              label="Delay(S)"
              value={autoSaveDelay}
              onChange={handleAutoSaveDelayChange}
              variant="filled"
              className={clsx(classes.cssTextField, classes.delayInputField)}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <Divider className={classes.divider} />

        <ListItem className={classes.listItem}>
          <ListItemText
            id="list-sort"
            primary="Sort"
            secondary="Controls the sort strategy of the notes"
          />
          <ListItemSecondaryAction>
            <TextField
              id="select-sort-type"
              select
              size="small"
              label="Sort by"
              value={sortType}
              onChange={handleChange}
              variant="filled"
              className={classes.cssTextField}>
              <MenuItem value={"Date Created"}>Date Created</MenuItem>
              <MenuItem value={"Last Updated"}>Last Updated</MenuItem>
              <MenuItem value={"Title"}>Title</MenuItem>
            </TextField>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider className={classes.divider} />
      </List>
    </div>
  );
};

export default React.memo(PreferencesPanel);




