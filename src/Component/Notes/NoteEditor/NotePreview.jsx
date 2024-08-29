// import packages
import React from "react";
import DOMPurify from "dompurify";
import { useStyles } from "./styles";

const NotePreview = ({ htmlContentState }) => {
  const classes = useStyles();
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  return (
    <div
      className={classes.preview}
      dangerouslySetInnerHTML={createMarkup(htmlContentState)}></div>
  );
};

export default React.memo(NotePreview);
