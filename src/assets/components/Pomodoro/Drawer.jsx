import * as React from "react";
import Drawer from "@mui/material/Drawer";

import { IconButton } from "@mui/material";
import { Settings } from "@mui/icons-material";
import DrawerList from "./DrawerList";

export default function DrawerSettings() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <Settings sx={{ fill: "black", fontSize: "60px" }} />
      </IconButton>
      <Drawer open={open}>
        <DrawerList toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
}
