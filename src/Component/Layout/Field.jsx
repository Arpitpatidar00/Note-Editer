// import packages
import React from "react";

// import styles
import { makeStyles, TextField } from "@material-ui/core";

// styles
const useStyles = makeStyles((theme) => ({
  addCategoryForm: {
    margin: theme.spacing(1.5),
  },
  cssTextField: {
    "& label.Mui-focused": {
      color: theme.customTheme.syntax,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.customTheme.syntax2,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.customTheme.syntax,
      },
    },
  },
}));

// Main Component Start..
const Field = ({
  submitHandler,
  resetHandler,
  changeHandler,
  categoryName,
  categoryId,
  label,
}) => {
  //@ States & Variables:
  const classes = useStyles();
  const oldCategoryName = categoryName;

  return (
    <form
      onSubmit={(e) => {
        submitHandler(e, categoryId, categoryName);
      }}
      className={classes.addCategoryForm}>
      <TextField
        id="new-category"
        value={categoryName}
        label={label}
        variant="outlined"
        type="text"
        autoFocus
        autoComplete="off"
        size="small"
        className={classes.cssTextField}
        onChange={changeHandler}
        onBlur={(e) => {
          if (categoryName.trim() === "") {
            resetHandler(categoryId);
          } else {
            submitHandler(e, categoryId, categoryName, oldCategoryName);
          }
        }}
      />
    </form>
  );
};

export default React.memo(Field);
