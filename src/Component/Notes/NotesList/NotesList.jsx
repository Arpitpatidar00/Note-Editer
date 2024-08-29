// import packages
import React, { useState, useEffect, useRef, useCallback } from "react";
import Hotkeys from "react-hot-keys";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

// import components
import NoteOptionPopper from "./NoteOptionPopper";
import MovableListItem from "./MovableListItem";

// import styles
import {
  Box,
  Divider,
  IconButton,
  List,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { useStyles } from "./styles";

// import icons
import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";

// import redux selectors and actions
import { deleteAllTrashNotesAction } from "../../../Redux/Notes/actions";
import { toggleSidebarAction } from "../../../Redux/Settings/action";
import {
  getAllNotes,
  getSelectedNoteForOption,
} from "../../../Redux/Selectors/notesSelectors";
import { getSortType } from "../../../Redux/Selectors/settingsSelectors";
import {
  getDefaultCategories,
  getUserCategories,
} from "../../../Redux/Selectors/categoriesSelector";

// Start Component -->
const NotesList = ({ categoryId }) => {
  //@ Consuming Contexts:
  const allNotes = useSelector((state) => state.notes.allNotes);
  const selectedNoteForOption = useSelector(getSelectedNoteForOption);
  const defaultCategories = useSelector(getDefaultCategories);
  const userCategories = useSelector(getUserCategories);
  const sortType = useSelector(getSortType);
  const dispatch = useDispatch();

  //@ States & Variables:
  const searchFieldRef = useRef();
  const classes = useStyles();
  const [formattedNotes, setFormattedNotes] = useState(() => {
    // formatting notes according to category id
    if (categoryId === "1") {
      return allNotes.filter((note) => note.category_id !== "3");
    } else if (categoryId === "2") {
      return allNotes.filter((note) => note.fav === true);
    } else {
      return allNotes.filter((note) => note.category_id === categoryId);
    }
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  let noteCategory;

  //@ Sort Formatted Notes:
  useEffect(() => {
    setFormattedNotes((prevFormattedNotes) => {
      if (sortType === "Last Updated") {
        const sortedFormattedNotes = prevFormattedNotes.sort((a, b) => {
          if (moment(a?.lastSaved).isBefore(b?.lastSaved)) return 1;
          if (moment(a?.lastSaved).isAfter(b?.lastSaved)) return -1;
          return 0;
        });
        return sortedFormattedNotes;
      } else if (sortType === "Title") {
        const sortedFormattedNotes = prevFormattedNotes.sort(function (a, b) {
          let x = a.title.toUpperCase(),
            y = b.title.toUpperCase();
          return x === y ? 0 : x > y ? 1 : -1;
        });
        return sortedFormattedNotes;
      } else if (sortType === "Date Created") {
        const sortedFormattedNotes = prevFormattedNotes.sort((a, b) => {
          if (moment(a?.createdAt).isBefore(b?.createdAt)) return 1;
          if (moment(a?.createdAt).isAfter(b?.createdAt)) return -1;
          return 0;
        });
        return sortedFormattedNotes;
      }
    });
  }, [sortType]);

  //@ Handlers:
  const toggleSidebarHandler = () => {
    dispatch(toggleSidebarAction("TOGGLE"));
  };

  const handleToggle = (e) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const deleteAllNotesHandler = () => {
    dispatch(deleteAllTrashNotesAction());
  };

  // helper function:
  function escapeRegExp(stringToGoIntoTheRegex) {
    return stringToGoIntoTheRegex.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
  }

  const searchHandler = useCallback(
    (e) => {
      const searchText = escapeRegExp(e.target.value);
      const regex = new RegExp(searchText, "gi");
      let foundInTitle = false;
      let foundInContent = false;

      setFormattedNotes(
        allNotes.filter((note) => {
          foundInTitle = regex.test(note.title);

          const noteContent = note?.content?.blocks
            .map((block) => {
              return block.text;
            })
            .join(" ");

          foundInContent = regex.test(noteContent);

          if (foundInTitle || foundInContent) return true;
          return false;
        })
      );
    },
    [searchFieldRef]
  );

  const FocusHandler = () => {
    console.log(searchFieldRef.current);
    searchFieldRef.current.focus();
  };

  useEffect(() => {
    if (categoryId === "1") {
      setFormattedNotes(allNotes.filter((note) => note.category_id !== "3"));
    } else if (categoryId === "2") {
      setFormattedNotes(allNotes.filter((note) => note.fav === true));
    } else {
      setFormattedNotes(
        allNotes.filter((note) => note.category_id === categoryId)
      );
    }
  }, [categoryId, allNotes]);

  // useEffect(() => {
  //   if (selectedNoteId !== null) setSelectedIndex(0);
  // }, [allNotes]);

  return (
    <div className={classes.root}>
      {selectedNoteForOption && (
        <NoteOptionPopper
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          open={open}
          id={id}
        />
      )}
      <Box display="flex" alignItems="center">
        <Box
          className={classes.menuIconWrapper}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={toggleSidebarHandler}>
          <MenuIcon />
        </Box>
        <Hotkeys keyName="ctrl+alt+f" onKeyDown={FocusHandler}>
          <form className={classes.searchForm} action="#">
            <TextField
              inputRef={searchFieldRef}
              label="Search Notes"
              variant="outlined"
              type="text"
              size="small"
              onChange={searchHandler}
              className={classes.cssTextField}
            />
          </form>
        </Hotkeys>
        {categoryId === "3" && (
          <Tooltip title="Empty Trash">
            <IconButton
              className={classes.deleteIcon}
              onClick={deleteAllNotesHandler}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>
      <Divider />
      <List component="nav" aria-label="notes-list">
        {formattedNotes.map((note, i) => {
          noteCategory = defaultCategories.filter(
            (category) => category.id === note.category_id
          );
          if (noteCategory.length === 0) {
            noteCategory = userCategories.filter(
              (category) => category.id === note.category_id
            );
          }

          return (
            <div key={note.id}>
              <MovableListItem
                note={note}
                handleToggle={handleToggle}
                noteCategory={noteCategory}
                index={i}
              />
              <Divider />
            </div>
          );
        })}
      </List>
    </div>
  );
};

export default React.memo(NotesList);
