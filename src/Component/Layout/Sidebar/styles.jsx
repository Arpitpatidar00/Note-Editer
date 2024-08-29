import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },

  drawer: {
    width: "230px",
    flexShrink: 0,
    background: theme.customTheme.bg,
    height: "100vh",
    ["@media (max-width:1080px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "200px",
    },
    ["@media (max-width:670px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "190px",
    },
    ["@media (max-width:370px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "160px",
    },
  },

  drawerPaper: {
    width: "230px",
    background: theme.customTheme.blurBg,
    color: theme.customTheme.syntax2,
    backdropFilter: "blur(10px)",
    borderRight: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    msOverflowStyle: "none" /* IE and Edge */,
    scrollbarWidth: "none" /* Firefox */,

    ["@media (max-width:1080px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "200px",
    },
    ["@media (max-width:670px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "190px",
    },
    ["@media (max-width:370px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "160px",
    },
  },

  showDrawer: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: "230px",
    ["@media (max-width:1080px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "200px",
    },
    ["@media (max-width:670px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "190px",
    },
    ["@media (max-width:370px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "160px",
    },
  },

  hideDrawer: {
    width: 0,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  toolbar: {
    ...theme.mixins.toolbar,
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
  },

  addNote: {
    padding: theme.spacing(2),
    background: "#12130f !important",
    color: "#f4f3ee !important",
    marginRight: "0.5rem",

    ["@media (max-width:670px)"]: {
      // eslint-disable-line no-useless-computed-key
      padding: theme.spacing(1),
    },

    "&:hover": {
      background: "rgba(18, 19, 15, 0.8) !important",
    },
  },

  typography: {
    marginLeft: "1rem",
  },

  tabs: {
    flexShrink: 0,
    "& .MuiTabs-indicator": {
      backgroundColor: theme.customTheme.syntax,
    },
  },

  tab: {
    width: "100%",
    minHeight: 0,
    padding: theme.spacing(1.5),

    "& .iconBox": {
      marginBottom: "0 !important",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexGrow: "0",
    },

    "&:hover": {
      background: "rgba(0,0,0,0.3)",
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

  dropHighlight: {
    background: theme.customTheme.syntax,
  },

  box: {
    "& svg": {
      fontSize: "1.2rem",
      transition: "0.3s ease",

      "&:hover": {
        transform: "scale(1.2)",
      },

      "&#trash:hover": {
        color: "red",
      },
    },
  },
  options: {
    "& .MuiPaper-root": {
      background: theme.customTheme.bg,
    },
  },
  optionsWrapper: {
    width: "200px",
    background: theme.customTheme.bg,
    color: theme.customTheme.syntax2,
  },

  menuItem: {
    fontSize: "0.9rem",
    opacity: 0.8,

    "&#trash": {
      "&:hover": {
        color: "#ea2c2c",
      },
    },

    "& svg": {
      transition: "0.3s ease",
      fontSize: "1.2rem",
      marginRight: "0.7rem  ",
    },

    "&:hover": {
      opacity: 1,
    },
  },

  addCategory: {
    margin: "1rem 0",
    "& .addC": {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",

      ["@media (max-width:370px)"]: {
        // eslint-disable-line no-useless-computed-key
        "& .MuiTypography-button": {
          fontSize: "0.8rem",
        },
        "& .MuiIconButton-root": {
          padding: theme.spacing(1),
        },
      },
    },
    "& [type=button]": {
      color: theme.customTheme.syntax2,
      opacity: 0.7,

      "&:hover": {
        opacity: 1,
      },
    },
  },

  collapse: {
    "& div": {
      width: "100%",
    },
  },
}));
