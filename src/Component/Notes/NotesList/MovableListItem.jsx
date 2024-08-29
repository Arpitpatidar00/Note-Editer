// import packages
import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";

// import styles
import {
  Box,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useStyles } from "./styles";

// import icons
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

// import contexts & ActionsCreators
import {
  selectNoteAction,
  selectNoteForOptionAction,
} from "../../../Redux/Notes/actions";
import {
  toggleEditorAction,
  togglePanelAction,
} from "../../../Redux/Settings/action";

const MovableListItem = ({ note, handleToggle, noteCategory, index }) => {
  //@ States & Variables:
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:480px)");

  //@Hooks:
  const [{ isDragging }, drag] = useDrag({
    type: "LISTITEM",
    item: {
      noteId: note.id,
      currentCategoryId: note.category_id,
      type: "LISTITEM",
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.4 : 1;

  //@ Consuming Contexts:
  const dispatch = useDispatch();

  const Icon = React.memo(({ children }) => {
    return (
      <Box
        className="iconBox"
        display="flex"
        alignItems="center"
        justifyContent="center"
        dangerouslySetInnerHTML={{ __html: children }}></Box>
    );
  });

  return (
    <ListItem
      ref={drag}
      style={{ opacity }}
      className={classes.listItem}
      button
      selected={note.active}
      onClick={(event) => {
        dispatch(selectNoteAction(note.id));
        if (matches) {
          dispatch(togglePanelAction(false));
          dispatch(toggleEditorAction(true));
        }
      }}>
      <ListItemText
        primary={
          <React.Fragment>
            <Box
              display="flex"
              alignItems="center"
              className={classes.primaryTextBox}>
              {note.fav ? <FavoriteOutlinedIcon /> : null}
              <Typography variant="body1">{note.title}</Typography>
            </Box>
            <MoreHorizOutlinedIcon
              onClick={(e) => {
                handleToggle(e);
                dispatch(selectNoteForOptionAction(note.id));
              }}
              style={{
                fontSize: "1.5rem",
              }}
            />
          </React.Fragment>
        }
        secondary={
          <React.Fragment>
            <Icon>{noteCategory[0]?.icon}</Icon>
            <Typography component="span" variant="body2" m={0}>
              {noteCategory[0]?.name}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default React.memo(MovableListItem);
