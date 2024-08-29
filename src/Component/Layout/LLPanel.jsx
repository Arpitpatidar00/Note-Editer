// import packages
import React from "react";

// import Components
import NotesList from "../Notes/NotesList/NotesList";
import TabPanel from "./TabPanels";

const LLPanel = ({ categoryId, categoryValue, index }) => {
  return (
    <TabPanel key={categoryId} value={categoryValue} index={index}>
      <NotesList categoryId={categoryId} />
    </TabPanel>
  );
};

export default LLPanel;
