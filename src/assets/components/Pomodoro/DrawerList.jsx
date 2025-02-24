import { Close } from "@mui/icons-material";
import { Box, IconButton, List, ListItem, Typography } from "@mui/material";
import TextInput from "./TextInput";
import PropTypes from "prop-types";
import usePomodoroStore from "../../../store/usePomodoroStore";

export default function DrawerList({ toggleDrawer }) {
  const {
    Focus,
    ShortBreak,
    LongBreak,
    changePomodoro,
    changeShortBreak,
    changeLongBreak,
  } = usePomodoroStore();
  return (
    <Box
      sx={{
        width: {
          sm: "100%",
          md: "100%",
        },
      }}
      role="presentation"
    >
      <List>
        {/* TODO:Put list items here */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "100px",
            width: "100%",
          }}
          component="div"
        >
          <Typography variant="h2">Pomodoro settings</Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <Close sx={{ color: "black" }} />
          </IconButton>
        </Box>
        <TextInput
          value={Focus}
          onChangeValue={changePomodoro}
          label="Pomodoro"
        />
        <TextInput
          value={ShortBreak}
          onChangeValue={changeShortBreak}
          label="Short Break"
        />
        <TextInput
          value={LongBreak}
          onChangeValue={changeLongBreak}
          label="Long Break"
        />
        <ListItem></ListItem>
      </List>
    </Box>
  );
}
DrawerList.propTypes = {
  toggleDrawer: PropTypes.func,
};
