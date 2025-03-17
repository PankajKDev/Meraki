import * as React from "react";
import Drawer from "@mui/material/Drawer";

import { IconButton } from "@mui/material";
import { Settings } from "@mui/icons-material";
import DrawerList from "./DrawerList";
import PropTypes from "prop-types";

export default function DrawerSettings({ color }) {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <Settings sx={{ fill: color, fontSize: "60px" }} />
      </IconButton>
      <Drawer open={open}>
        <DrawerList toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
}

DrawerSettings.propTypes = {
  color: PropTypes.string,
};
