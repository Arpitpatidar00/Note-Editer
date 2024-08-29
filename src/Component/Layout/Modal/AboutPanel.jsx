// import packages
import React from "react";
import { useDispatch } from "react-redux";

// import redux actions:
import { toggleSettingsTabAction } from "../../../Redux/Settings/actions";

// import styles
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Button,
  makeStyles,
  Box,
} from "@material-ui/core";

// import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles((theme) => ({
  typography: {
    fontSize: "0.93rem",
    // lineHeight: "2",
    textAlign: "justify",

    "& a.highlight": {
      textDecoration: "none",
      borderRadius: "5px",
      backgroundColor: theme.customTheme.syntax,
      color: theme.customTheme.ui,
      padding: "0.1rem 0.2rem",
    },

    "& .highlightPoints": {
      color: "rgba(0, 0, 0, 0.54)",

      "& p": {
        margin: "0",
      },
    },
  },
  button: {
    fontSize: "0.9rem",

    "&:hover": {
      color: theme.customTheme.ui,
      backgroundColor: theme.customTheme.syntax,
    },
  },
  list: {
    "& .MuiListSubheader-sticky": {
      position: "static",
    },
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

const AboutPanel = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const toggleSettingsTabHandler = () => {
    dispatch(toggleSettingsTabAction("TOGGLE"));
  };

  return (
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
            About The.Editor
          </Box>
        </ListSubheader>
      }>
      <ListItem>
        <ListItemText
          primary={
            <Typography variant="body1" className={classes.typography}>
              The.Editor is a clone app of{" "}
              <a
                href="https://takenote.dev"
                target="_blank"
                className="highlight">
                takenote.dev
              </a>{" "}
              I made it for learning purpose only not for copy.
              <br />
              <br />
              Although it is a clone app but there are some changes in this
              version like:
              <span className="highlightPoints">
                <p>- I used a wysiwyg editor not a markdown editor.</p>
                <p>
                  - The notes are download in docx format which you can use in
                  other doc reader like word or wps.
                </p>
              </span>
              Apart from feature the App structure is also the same with a
              variation in theme colors.
              <br />
              <br />
              The.Editor is created by &nbsp;
              <a
                className="highlight"
                target="_blank"
                href="https://www.linkedin.com/in/divyansht/">
                DivyanSH
              </a>
              &nbsp; Mern-Stack Developer.
              <p className="highlightPoints">
                Disclaimer: The code is not at all copied from the open source
                repo of takenote.dev, all logic and implementation is of my own,
                you Guys can check the source code on github.
              </p>
            </Typography>
          }
          secondary={
            <Button
              target="_blank"
              href="https://github.com/Hey-Developer/the.editor"
              disableElevation
              variant="contained"
              color="default"
              className={classes.button}>
              Source Code
            </Button>
          }
        />
      </ListItem>
    </List>
  );
};

export default React.memo(AboutPanel);
