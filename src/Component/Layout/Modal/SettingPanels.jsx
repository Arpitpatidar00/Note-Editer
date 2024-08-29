// import packages
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

// import styles
import {
  Modal,
  Backdrop,
  Fade,
  Tabs,
  Tab,
  useMediaQuery,
} from "@material-ui/core";
import { useStyles } from "./styles";

// import icons

import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import StorageIcon from "@mui/icons-material/Storage";
import InfoIcon from "@mui/icons-material/Info";
import SettingPanels from "./SettingPanels";

// import redux selectors
import { getSettingsTabOpen } from "../../../Redux/Selectors/settingsSelectors";
import { toggleSettingsTabAction } from "../../../Redux/Settings/action";

let firstRender = true;

const SettingModal = ({ isOpen, setIsOpen }) => {
  const matches = useMediaQuery("(max-width:878px)");

  //@ States & Variables:
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const settingsTabOpen = useSelector(getSettingsTabOpen);
  const dispatch = useDispatch();

  //@Handlers:
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  useEffect(() => {
    if (matches) {
      firstRender = false;
      dispatch(toggleSettingsTabAction(false));
    } else if (!firstRender) {
      dispatch(toggleSettingsTabAction(true));
    }
  }, [matches]);

  const toggleSettingsTabHandler = () => {
    if (matches) {
      dispatch(toggleSettingsTabAction(false));
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={isOpen}>
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={clsx(classes.tabs, {
              [classes.hideSettingsTab]: !settingsTabOpen,
            })}>
            <Tab
              className={classes.tab}
              onClick={toggleSettingsTabHandler}
              icon={<SettingsIcon />}
              label="Preferences"
              {...a11yProps(0)}
            />
            <Tab
              className={classes.tab}
              onClick={toggleSettingsTabHandler}
              icon={<KeyboardIcon />}
              label="Shortcuts"
              {...a11yProps(1)}
            />
            <Tab
              className={classes.tab}
              onClick={toggleSettingsTabHandler}
              icon={<StorageIcon />}
              label="Data Management"
              {...a11yProps(2)}
            />
            <Tab
              className={classes.tab}
              onClick={toggleSettingsTabHandler}
              icon={<InfoIcon />}
              label="About"
              {...a11yProps(3)}
            />
          </Tabs>
          <SettingPanels value={value} />
        </div>
      </Fade>
    </Modal>
  );
};

export default React.memo(SettingModal);
