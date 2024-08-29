// import packages
import React, { lazy, Suspense } from "react";
import clsx from "clsx";

// import components
// import NotesList from "../Notes/NotesList/NotesList";
// import TabPanel from "./TabPanel";

// import redux selectors
import {
  getDefaultCategories,
  getUserCategories,
} from "../../Redux/Selectors/categoriesSelector";

// import styles
import { Box, CircularProgress} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getShowPanel } from "../../Redux/Selectors/settingsSelectors";

// Styles:
const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    height: "100vh",
    background: theme.customTheme.ui,
    overflowY: "auto",
    width: "300px",
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ["@media (max-width:1080px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "250px",
    },
    ["@media (max-width:670px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "220px",
    },
    ["@media (max-width:559px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "200px",
    },
    ["@media (max-width:480px)"]: {
      // eslint-disable-line no-useless-computed-key
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      flexShrink: 1,
      width: "100%",
    },
  },

  hidePanel: {
    display: "none",
  },

  loaderBox: {
    height: "100%",
  },
}));

// Main Component Start..
const Panels = ({ defaultCategoryValue, userCategoryValue }) => {
  const PanelContainer = lazy(() => import("./LLPanel"));

  //@ States and Variables:
  const classes = useStyles();

  //@ Consuming Redux:
  const defaultCategories = useSelector(getDefaultCategories);
  const userCategories = useSelector(getUserCategories);
  const showPanel = useSelector(getShowPanel);

  return (
    <div
      className={clsx(classes.root, {
        [classes.hidePanel]: !showPanel,
      })}>
      <Suspense
        fallback={
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={classes.loaderBox}>
            <CircularProgress />
          </Box>
        }>
        {/* default category panels */}
        {defaultCategories.map((category, i) => (
          <PanelContainer
            key={category.id}
            categoryId={category.id}
            categoryValue={defaultCategoryValue}
            index={i}
          />
        ))}
        {/* User category panels */}
        {userCategories.map((category, i) => (
          <PanelContainer
            key={category.id}
            categoryId={category.id}
            categoryValue={userCategoryValue}
            index={i}
          />
        ))}
      </Suspense>
    </div>
  );
};

export default React.memo(Panels);
