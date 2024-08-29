import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },

  searchForm: {
    margin: theme.spacing(1.5),
  },

  cssTextField: {
    "& label.Mui-focused": {
      color: theme.customTheme.syntax,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: theme.customTheme.syntax,
      },
    },
    ["@media (max-width:385px)"]: {
      // eslint-disable-line no-useless-computed-key
      "& .MuiInputLabel-outlined": {
        fontSize: "0.8rem",
      },
    },
    ["@media (max-width:320px)"]: {
      // eslint-disable-line no-useless-computed-key
      "& .MuiInputLabel-outlined": {
        fontSize: "0.6rem",
      },
    },
  },

  menuIconWrapper: {
    marginLeft: "0.5rem",
    padding: "0.4rem",
    borderRadius: "5px",
    transition: "0.3s ease",
    display: "none",

    ["@media (max-width:890px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: "flex",
    },

    "&:hover": {
      backgroundColor: theme.customTheme.syntax,
      color: theme.customTheme.ui,
    },
  },

  deleteIcon: {
    color: "red",
    marginRight: "0.3em",
  },

  listItem: {
    // padding: theme.spacing(2.3),

    "&.Mui-selected": {
      background: theme.customTheme.syntax,
      color: theme.customTheme.syntax2,
      "&:hover": {
        background: theme.customTheme.syntax,
      },
      "& p.MuiListItemText-secondary": {
        color: "#bbbaba !important",
      },
    },
    "&:hover": {
      background: theme.customTheme.lightHover,
    },
    "& .MuiTypography-root": {
      fontSize: "0.9rem",
    },

    "& .MuiListItemText-secondary, .MuiListItemText-primary": {
      display: "flex",
      alignItems: "center",
      marginTop: "0.5rem",

      "& svg": {
        fontSize: "1rem",
        marginRight: "0.5rem",
      },
    },

    "& .MuiListItemText-primary": {
      justifyContent: "space-between",

      "& svg": {
        opacity: 0.8,
        transition: "0.3s ease",

        "&:hover": {
          opacity: 1,
          transform: "scale(1.2)",
        },
      },
    },
  },

  primaryTextBox: {
    width: "85%",

    "& p": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },

  paper: {
    width: "250px",
  },

  menuItem: {
    fontSize: "0.9rem",
    opacity: 0.7,

    "&#trash": {
      "&:hover": {
        color: "red",
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
  selectTextFieldWrapper: {
    margin: "0.5rem 1rem 0.5rem",
  },

  selectTextField: {
    width: "100%",
    fontSize: "0.8rem",

    "& label.Mui-focused": {
      color: theme.customTheme.syntax,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(0,0,0,0.4)",
      },

      "&.Mui-focused fieldset": {
        borderColor: theme.customTheme.syntax,
      },
    },
  },

  //X------X-------X--------X----END-------X------X------X----X--X
}));
