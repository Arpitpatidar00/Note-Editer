import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  root: {
    display: "flex",
    background: "white",
    borderRadius: "5px",
    width: "50vw",
    height: "60vh",
    padding: theme.spacing(2),
    paddingRight: 0,
    outline: "none",

    ["@media (max-width:1340px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "60vw",
    },
    ["@media (max-width:950px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "65vw",
    },

    ["@media (max-width:878px)"]: {
      // eslint-disable-line no-useless-computed-key
      padding: theme.spacing(1),
    },

    ["@media (max-width:710px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "70vw",
    },
    ["@media (max-width:558px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "80vw",
      height: "70vh",
    },
    ["@media (max-width:432px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "90vw",
      height: "70vh",
    },
  },

  tabs: {
    width: "215px",
    flexGrow: 0,
    borderRight: `1px solid ${theme.customTheme.ui}`,

    "& .MuiTabs-indicator": {
      backgroundColor: theme.customTheme.bg,
    },

    ["@media (max-width:1460px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "230px",
    },
    ["@media (max-width:515px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "260px",
    },
    ["@media (max-width:380px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "400px",
    },
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  hideSettingsTab: {
    width: 0,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  tab: {
    minHeight: 0,
    padding: theme.spacing(1.5),
    marginRight: "1rem",
    marginBottom: "0.5rem",
    borderRadius: "7px",

    ["@media (max-width:1110px)"]: {
      // eslint-disable-line no-useless-computed-key
      fontSize: "0.8rem",
    },

    ["@media (max-width:878px)"]: {
      // eslint-disable-line no-useless-computed-key
      padding: theme.spacing(1),
      minWidth: "94%",
    },

    "&.Mui-selected": {
      background: theme.customTheme.ui,
    },

    "&:hover": {
      background: theme.customTheme.ui,
    },

    "& span": {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
    },

    "& svg": {
      fontSize: "1.4rem",
      marginRight: "0.7rem",
      marginBottom: "0 !important",
    },
  },

  settingsPanel: {
    width: "72%",
    height: "100%",
    paddingRight: "1.5rem",
    overflowY: "auto",
    overflowX: "hidden",

    ["@media (max-width:876px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "100%",
    },
  },
}));
