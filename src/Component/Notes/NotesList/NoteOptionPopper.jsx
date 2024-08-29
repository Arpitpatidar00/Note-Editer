// import packages:
import React from "react";
import draftToHtml from "draftjs-to-html";
import { Document, Packer, Paragraph , TextRun} from 'docx';
// import htmlToDocx  from "html-to-docx-buffer";
import { useDispatch, useSelector } from "react-redux";
import { saveAs } from "file-saver";

// import Icons
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";

// import Styles
import {
  Box,
  MenuItem,
  MenuList,
  Paper,
  Popover,
  TextField,
} from "@material-ui/core";
import { useStyles } from "./styles";

//import contexts
import {
  addToFavAction,
  deleteNoteAction,
  restoreNoteAction,
  tempDeleteNoteAction,
  moveToCategoryAction,
} from "../../../Redux/Notes/actions";
import { getUserCategories } from "../../../Redux/Selectors/categoriesSelector";
import { getSelectedNoteForOption } from "../../../Redux/Selectors/notesSelectors";

// Main Component Start..
const NoteOptionPopper = ({ anchorEl, setAnchorEl, id, open }) => {
  // @ Variables or State
  const classes = useStyles();

  //@ Consume Context:
  const userCategories = useSelector(getUserCategories);
  const selectedNote = useSelector(getSelectedNoteForOption);
  const dispatch = useDispatch();

  const noUserCategories = userCategories.length === 0;

  // @ handlers:
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setAnchorEl(null);
    }
  }

  const handleSelectCategoryChange = (e) => {
    dispatch(moveToCategoryAction(selectedNote.id, e.target.value));
    setAnchorEl(null);
  };

  const addToFavHandler = () => {
    dispatch(addToFavAction(selectedNote.id));
    setAnchorEl(null);
  };

  const deleteNoteHandler = () => {
    dispatch(tempDeleteNoteAction(selectedNote.id));
    setAnchorEl(null);
  };

  const restoreNoteHandler = () => {
    dispatch(restoreNoteAction(selectedNote.id));
    setAnchorEl(null);
  };

  const deleteNotePermanentHandler = () => {
    dispatch(deleteNoteAction(selectedNote.id));
    setAnchorEl(null);
  };
  const htmlToDocx = (htmlContent) => {
    // Create a new 'docx' document
    const doc = new Document();
  
    // Split the HTML content into paragraphs
    const paragraphs = htmlContent.split('</p>').map((p) => p.trim() + '</p>');
  
    // Add each paragraph to the 'docx' document as a new 'Paragraph' instance
    paragraphs.forEach((p) => {
      const textRun = new TextRun(p);
      doc.addParagraph(new Paragraph(textRun));
    });
  
    // Create a 'Packer' instance to generate the final DOCX file
    const packer = new Packer();
  
    // Generate the DOCX file as a Uint8Array
    const docxArrayBuffer = packer.toBuffer(doc);
  
    // Return the DOCX file as a Buffer
    return Buffer.from(docxArrayBuffer);
  };

  const downloadNoteHandler = async () => {
    setAnchorEl(null);
  
    // Convert draft content to HTML
    const htmlContent = draftToHtml(selectedNote.content);
  
    // Convert HTML to DOCX
    const fileBuffer = await htmlToDocx(htmlContent);
  
    // Save the file
    const blob = new Blob([fileBuffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    saveAs(blob, `${selectedNote.title}.docx`);  };

  // Return Component:
  return (
    <Popover
      elevation={2}
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      className={classes.popover}>
      <Paper className={classes.paper} elevation={0}>
        <MenuList
          autoFocusItem={open}
          id="menu-list-grow"
          onKeyDown={handleListKeyDown}>
          {selectedNote.category_id === "3"
            ? [
                <MenuItem
                  className={classes.menuItem}
                  id="trash"
                  onClick={deleteNotePermanentHandler}>
                  <DeleteOutlineIcon />
                  Delete Permanently
                </MenuItem>,
                <MenuItem
                  className={classes.menuItem}
                  onClick={restoreNoteHandler}>
                  <RestoreOutlinedIcon />
                  Restore
                </MenuItem>,
              ]
            : [
                <MenuItem
                  className={classes.menuItem}
                  onClick={addToFavHandler}>
                  {selectedNote.fav
                    ? [<BookmarkOutlinedIcon />, "Remove Favorite"]
                    : [<BookmarkBorderOutlinedIcon />, "Add to Favorite"]}
                </MenuItem>,
                <MenuItem
                  className={classes.menuItem}
                  id="trash"
                  onClick={deleteNoteHandler}>
                  <DeleteOutlineIcon />
                  Trash
                </MenuItem>,
              ]}

          <MenuItem className={classes.menuItem} onClick={downloadNoteHandler}>
            <SystemUpdateAltIcon />
            Download
          </MenuItem>
          {selectedNote.category_id === "3" ? null : (
            <Box className={classes.selectTextFieldWrapper}>
              <TextField
                className={classes.selectTextField}
                size="small"
                select
                label="Move to category"
                disabled={noUserCategories ? true : false}
                helperText={noUserCategories ? "No user categories" : ""}
                onChange={handleSelectCategoryChange}
                variant="outlined">
                {userCategories.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          )}
        </MenuList>
      </Paper>
    </Popover>
  );
};

export default React.memo(NoteOptionPopper);
