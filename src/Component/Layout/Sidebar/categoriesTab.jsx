// import packages
import React from "react";
import clsx from "clsx";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";

// import styles:
import { Box, Tab } from "@material-ui/core";
import { useStyles } from "./styles";

// import icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";


// import redux
import {
  selectCategoryAction,
  toggleEditModeAction,
  deleteCategoryAction,
} from "../../../Redux/Category/actions";
import { moveToCategoryAction } from "../../../Redux/Notes/actions";

const CategoriesTab = ({
  category,
  userCategory,
  setCategoryName,
  setDefaultCategoryValue,
  setUserCategoryValue,
  index,
}) => {
  //@ States & Variables:
  const classes = useStyles();

  //@ Drop Hook
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "LISTITEM",
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = isOver && canDrop;

  //@ Consuming Redux:
  const dispatch = useDispatch();

  //@ Handlers:

  function onDrop(item) {
    if (category.id === item.currentCategoryId) {
      alert("Note already present in this category");
    } else {
      dispatch(moveToCategoryAction(item.noteId, category.id));
    }
  }

  // for naming tab id
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  const Icon = React.memo(({ children }) => {
    return (
      <span
        className="iconBox"
        dangerouslySetInnerHTML={{ __html: children }}></span>
    );
  });

  return (
    <Tab
      {...a11yProps(category.id)}
      ref={drop}
      className={clsx(classes.tab, {
        [classes.dropHighlight]: isActive,
      })}
      icon={<Icon>{category.icon}</Icon>}
      label={
        userCategory ? (
          <Box
            display="flex"
            alignItems="center"
            className={classes.box}
            justifyContent="space-between">
            {category.name}
            <Box display="flex" alignItems="center" justifyContent="flex-end">
              <EditIcon
                data-id={category.id}
                data-name={category.name}
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(toggleEditModeAction(category.id));
                  setCategoryName(category.name);
                }}
              />
              <DeleteOutlineIcon
                id="trash"
                data-id={category.id}
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(deleteCategoryAction(category.id));
                }}
              />
            </Box>
          </Box>
        ) : (
          category.name
        )
      }
      onClick={() => {
        dispatch(selectCategoryAction(category.id));
        if (userCategory) {
          setDefaultCategoryValue(null);
          setUserCategoryValue(index);
        } else {
          setUserCategoryValue(null);
          setDefaultCategoryValue(index);
        }
      }}
      onDoubleClick={
        userCategory
          ? () => {
              dispatch(toggleEditModeAction(category.id));
              setCategoryName(category.name);
            }
          : null
      }
    />
  );
};

export default React.memo(CategoriesTab);
