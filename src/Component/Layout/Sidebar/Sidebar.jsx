// import packages
import React, { useEffect, useState } from "react";
import Hotkeys from "react-hot-keys";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

// import components
import Field from "../Field";
import CategoriesTab from "./categoriesTab";

// import Redux selectors and ActionsCreators
import {
  getDefaultCategories,
  getSelectedCategoryIndex,
  getUserCategories,
} from "../../../Redux/Selectors/categoriesSelector";
import { getSidebarOpen } from "../../../Redux/Selectors/settingsSelectors";
import {
  addCategoryAction,
  renameCategoryAction,
  toggleEditModeAction,
} from "../../../Redux/Category/actions";
import { addNoteAction } from "../../../Redux/Notes/actions";
import { toggleSidebarAction } from "../../../Redux/Settings/action";

// import styles
import { useStyles } from "./styles";
import {
  CssBaseline,
  Drawer,
  IconButton,
  Typography,
  Tabs,
  Divider,
  Collapse,
  useMediaQuery,
} from "@material-ui/core";

// import icons
import AddIcon from "@mui/icons-material/Add"
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

let firstRender = true;

// Main Component Start..
function Sidebar({
  defaultCategoryValue,
  userCategoryValue,
  setDefaultCategoryValue,
  setUserCategoryValue,
}) {
  //@ States & Variables:
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:890px)");

  // for collapse
  const [open, setOpen] = useState(false);
  // for add category Form
  const [showForm, setShowForm] = useState(false);
  // for value inside form
  const [categoryName, setCategoryName] = useState("");

  //@ Consuming Redux:
  const userCategories = useSelector(getUserCategories);
  const defaultCategories = useSelector(getDefaultCategories);
  const selectedCategoryIndex = useSelector(getSelectedCategoryIndex);
  const sidebarOpen = useSelector(getSidebarOpen);
  const dispatch = useDispatch();

  //@ Useful Data from contexts:
  const allCategoryNames = userCategories.map((category) => category.name);

  //@ Hooks:
  useEffect(() => {
    if (matches) {
      firstRender = false;
      dispatch(toggleSidebarAction(false));
    } else if (!firstRender) {
      dispatch(toggleSidebarAction(true));
    }
  }, [matches]);

  //@ Event Handlers:
  // for Collapse user category
  const collapseCategoryHandler = () => {
    setOpen(!open);
    setShowForm(false);
  };

  // for tabs value change
  const defaultCategoryHandleChange = (e, newValue) => {
    console.log(newValue);
    setUserCategoryValue(null);
    setDefaultCategoryValue(newValue);
  };
  const userCategoryHandleChange = (e, newValue) => {
    setDefaultCategoryValue(null);
    setUserCategoryValue(newValue);
  };

  // For showing Form to Add-Category
  const addCategoryHandler = (e) => {
    if (!open) setOpen(true);
    setShowForm(true);
  };

  // for setting category-name on type
  const categoryNameChangeHandler = (e) => {
    setCategoryName(e.target.value);
  };

  // submit handler to add category
  const addCategorySubmitHandler = (e) => {
    e.preventDefault();
    if (allCategoryNames.includes(categoryName)) {
      alert("Category Already Exist");
    } else {
      dispatch(addCategoryAction(categoryName));
    }
    setCategoryName("");
    setShowForm(false);
  };

  // reset handler of add category form
  const addCategoryResetHandler = (e) => {
    setCategoryName("");
    setShowForm(false);
    setOpen(false);
  };

  // update category name form submit handler
  const categoryRenameSubmitHandler = (
    e,
    categoryId,
    categoryName,
    oldCategoryName
  ) => {
    e.preventDefault();
    if (categoryName === oldCategoryName) {
    } else if (allCategoryNames.includes(categoryName)) {
      alert("Category Already Exist");
    } else {
      dispatch(renameCategoryAction(categoryId, categoryName));
    }
    dispatch(toggleEditModeAction(categoryId));
    setCategoryName("");
    // setOpen(false);
  };

  // update category name form reset handler
  const categoryRenameResetHandler = (e, categoryId) => {
    dispatch(toggleEditModeAction(categoryId));
    setCategoryName("");
    setOpen(false);
  };

  // to add note in redux global state
  const addNoteHandler = () => {
    dispatch(addNoteAction(selectedCategoryIndex));
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.showDrawer]: sidebarOpen,
          [classes.hideDrawer]: !sidebarOpen,
        })}
        classes={{
          paper: clsx(classes.drawerPaper, {
            [classes.showDrawer]: sidebarOpen,
            [classes.hideDrawer]: !sidebarOpen,
          }),
        }}
        anchor="left">
        <div className={classes.toolbar}>
          <Hotkeys keyName="ctrl+alt+n" onKeyDown={addNoteHandler}>
            <IconButton
              className={classes.addNote}
              disabled={defaultCategoryValue === 3 ? true : false}
              onClick={addNoteHandler}>
              <AddIcon style={{ fontSize: "1.4rem" }} />
            </IconButton>
          </Hotkeys>
          <Typography variant="h6" className={classes.typography}>
            New Note
          </Typography>
        </div>
        <Tabs
          orientation="vertical"
          value={defaultCategoryValue}
          onChange={defaultCategoryHandleChange}
          className={classes.tabs}>
          {defaultCategories.map((category, i) => (
            <CategoriesTab
              key={category.id}
              category={category}
              userCategory={false}
              setCategoryName={setCategoryName}
              setDefaultCategoryValue={setDefaultCategoryValue}
              setUserCategoryValue={setUserCategoryValue}
              index={i}
            />
          ))}
        </Tabs>

        <Divider />

        <div className={classes.addCategory}>
          <div className="addC">
            <Hotkeys keyName="ctrl+alt+c" onKeyDown={addCategoryHandler}>
              <IconButton onClick={addCategoryHandler}>
                <AddToPhotosOutlinedIcon />
              </IconButton>
            </Hotkeys>
            <div onClick={collapseCategoryHandler}>
              <Typography variant="button">Categories</Typography>
              <IconButton>
                {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
              </IconButton>
            </div>
          </div>
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            className={classes.collapse}>
            {/* User Categories Tabs */}
            {userCategories.length > 0 ? (
              <Tabs
                orientation="vertical"
                value={userCategoryValue}
                onChange={userCategoryHandleChange}
                className={classes.tabs}>
                {userCategories.map((category, i) => {
                  if (category.editMode)
                    return (
                      <Field
                        key={i}
                        categoryId={category.id}
                        categoryName={categoryName}
                        changeHandler={categoryNameChangeHandler}
                        submitHandler={categoryRenameSubmitHandler}
                        resetHandler={categoryRenameResetHandler}
                        label="Rename Category..."
                      />
                    );
                  else
                    return (
                      <CategoriesTab
                        key={category.id}
                        category={category}
                        userCategory={true}
                        setCategoryName={setCategoryName}
                        setDefaultCategoryValue={setDefaultCategoryValue}
                        setUserCategoryValue={setUserCategoryValue}
                        index={i}
                      />
                    );
                })}
              </Tabs>
            ) : null}
            {showForm && (
              <Field
                categoryName={categoryName}
                changeHandler={categoryNameChangeHandler}
                submitHandler={addCategorySubmitHandler}
                resetHandler={addCategoryResetHandler}
                label="New Category..."
              />
            )}
          </Collapse>
        </div>
      </Drawer>
    </div>
  );
}

export default React.memo(Sidebar);
